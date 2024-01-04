import { Button, DatePicker, Input, Space, Table } from 'antd';
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';
import { PlusOutlined, DeleteOutlined, FilePdfOutlined, DownloadOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { REPORT_PAGE_LIMIT } from '@/constants/tables';
import { debounce } from 'lodash';
import dayjs from 'dayjs';
import styles from '@/styles/dashboard/modules/_ajax_data_table.module.scss';

const { RangePicker } = DatePicker;

const rangePresets = [
	{
		label: 'Last 7 Days',
		value: [dayjs().add(-7, 'd'), dayjs()],
	},
	{
		label: 'Last 14 Days',
		value: [dayjs().add(-14, 'd'), dayjs()],
	},
	{
		label: 'Last 30 Days',
		value: [dayjs().add(-30, 'd'), dayjs()],
	},
	{
		label: 'Last 90 Days',
		value: [dayjs().add(-90, 'd'), dayjs()],
	},
];

const AjaxDataTable = (
	{
		columns,
		dataSource,
		pagination,
		scroll,
		expandable,
		triggerCreate,
		triggerDelete,
		getSelectedRows,
		clearSelection,
		triggerTableChange,
		filtersConfig = {},
		allowFilters = true,
		hideActions = false,
		bordered = true,
	},
	ref
) => {
	const { t } = useTranslation();

	const [dataColumns, setDataColumns] = useState([]);
	const [data, setData] = useState([]);
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);
	const [loading, setLoading] = useState(false);

	const [tableParams, setTableParams] = useState({
		pagination: {
			current: 1,
			pageSize: REPORT_PAGE_LIMIT,
		},
	});
	const [isRangePickerOpen, setIsRangePickerOpen] = useState(false);

	const [searchText, setSearchText] = useState('');
	const [dateRange, setDateRange] = useState([]);
	const [tableFiltersConfig, setTableFiltersConfig] = useState({
		DATE_RANGE_PICKER: {
			enable: false,
			field_name: 'dates',
		},
		SEARCH: {
			enable: true,
			field_name: 'search',
		},
	});

	const start = () => {
		setLoading(true);
		// ajax request after empty completing
		setTimeout(() => {
			setSelectedRowKeys([]);
			setLoading(false);
		}, 1000);
	};

	// const triggerDelete = (e) => {
	//     console.log('triggerDelete', e)
	// }

	// const triggerCreate = (e) => {
	//     console.log('triggerCreate', e)
	// }

	const onSelectChange = (newSelectedRowKeys) => {
		// console.log('selectedRowKeys changed: ', newSelectedRowKeys);
		setSelectedRowKeys(newSelectedRowKeys);
	};

	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	};
	const hasSelected = selectedRowKeys.length > 0;

	useEffect(() => {
		if (dataSource) {
			transformData(dataSource);
		}
	}, [dataSource]);

	useEffect(() => {
		if (columns) {
			transformColumns(columns);
		}
	}, [columns]);

	useEffect(() => {
		if (typeof getSelectedRows === 'function') {
			getSelectedRows(transformSelectedRows(selectedRowKeys));
		}
	}, [selectedRowKeys]);

	useImperativeHandle(
		ref,
		() => {
			return {
				clearSelection() {
					_clearSelection();
				},
			};
		},
		[]
	);

	function _clearSelection() {
		// console.log("clearSelection");
		setSelectedRowKeys([]);
	}

	function transformData(values) {
		const newdata = [];
		for (let i = 0; i < values.length; i++) {
			newdata.push({
				key: i + 1,
				...values[i],
			});
		}

		// console.log(newdata)
		setData(newdata);
	}

	function transformColumns(values) {
		const newColumn = {
			title: t('common.serial'),
			dataIndex: 'key',
			// width: 250,
		};

		setDataColumns([Table.SELECTION_COLUMN, newColumn, Table.EXPAND_COLUMN, ...values]);
	}

	function transformSelectedRows(rowValues) {
		let rowsData = [];
		selectedRowKeys.forEach((val, key) => {
			// console.log(val)
			rowsData.push(data[val - 1]);
		});

		return rowsData;
	}

	function handleBulkDelete(values) {
		triggerDelete(values);
		setSelectedRowKeys([]);
	}

	const handleTableChange = (pagination, filters, sorter) => {
		setTableParams({
			pagination,
			filters,
			sorter,
			searchText,
			dateRange,
		});

		// `dataSource` is useless since `pageSize` changed
		if (pagination.pageSize !== tableParams.pagination?.pageSize) {
			setData([]);
		}
	};

	const updateTableParams = (key, value) => {
		let __tableParams = { ...tableParams };

		__tableParams[key] = value;

		setTableParams(__tableParams);
	};

	const handleDateRangeChange = (dates) => {
		if (dates && dates.length > 0) {
			setDateRange(dates);

			let __dateRange = [];
			for (let date of dates) __dateRange.push(date.format('YYYY-MM-DD'));

			updateTableParams(tableFiltersConfig.DATE_RANGE_PICKER.field_name, JSON.stringify(__dateRange));
		} else {
			updateTableParams(tableFiltersConfig.DATE_RANGE_PICKER.field_name, []);
		}

		setIsRangePickerOpen(false);
	};

	const handleSearchChange = (value) => {
		let __tableParams = { ...tableParams };
		__tableParams.pagination.current = 1;
		__tableParams.search = value;
		setTableParams(__tableParams);
		setSearchText(value);
	};

	const updateFilterConfig = useCallback(() => {
		const _tableFiltersConfig = { ...tableFiltersConfig };

		if (filtersConfig?.DATE_RANGE_PICKER) {
			_tableFiltersConfig.DATE_RANGE_PICKER = filtersConfig.DATE_RANGE_PICKER;
		}
		if (filtersConfig?.SEARCH) {
			_tableFiltersConfig.SEARCH = filtersConfig.SEARCH;
		}

		setTableFiltersConfig(_tableFiltersConfig);
	}, [JSON.stringify(tableFiltersConfig)]);

	useEffect(() => {
		triggerTableChange(tableParams);
	}, [JSON.stringify(tableParams)]);

	useEffect(() => {
		updateFilterConfig();
	}, [JSON.stringify(filtersConfig)]);

	return (
		<div>
			<div
				style={{
					marginBottom: 16,
				}}
			>
				{!hideActions && (
					<Space wrap>
						<Button type="primary" onClick={triggerCreate} loading={loading}>
							<PlusOutlined />
							{t('common.create-new')}
						</Button>
						<Button
							type="primary"
							onClick={(e) => handleBulkDelete(transformSelectedRows(selectedRowKeys))}
							disabled={!hasSelected}
							loading={loading}
							danger
						>
							<DeleteOutlined />
							{t('common.delete')}
						</Button>
					</Space>
				)}

				<span
					style={{
						marginLeft: 8,
					}}
				>
					{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
				</span>
			</div>

			{allowFilters && (
				<div className={styles.header_area}>
					<div className={styles.left_area}>
						<Space.Compact>
							{tableFiltersConfig && tableFiltersConfig?.DATE_RANGE_PICKER?.enable && (
								<RangePicker
									// allowClear
									allowEmpty={true}
									presets={[...rangePresets]}
									showTime={false}
									format="YYYY/MM/DD"
									// defaultPickerValue={rangePresets[2].value}
									// defaultValue={rangePresets[2].value}
									open={isRangePickerOpen}
									onOpenChange={setIsRangePickerOpen}
									onChange={handleDateRangeChange}
									renderExtraFooter={() => {
										return (
											<div className={styles.range_picker_footer}>
												<Button type="primary" onClick={(e) => setIsRangePickerOpen(false)}>
													Apply
												</Button>
											</div>
										);
									}}
								/>
							)}

							{tableFiltersConfig && tableFiltersConfig?.SEARCH?.enable && (
								<Input.Search
									style={{ width: '60%' }}
									placeholder="Search"
									allowClear
									defaultValue={searchText}
									onChange={(e) => debounce((val) => handleSearchChange(e.target.value), 500)}
									onSearch={(val) => handleSearchChange(val)}
								/>
							)}
						</Space.Compact>
					</div>
					<div className={styles.right_area}>
						<Button icon={<DownloadOutlined />}>Download</Button>

						<Button icon={<FilePdfOutlined />}>Print</Button>
					</div>
				</div>
			)}
			<div className={styles.table_content}>
				<Table
					rowSelection={rowSelection}
					columns={dataColumns}
					dataSource={data}
					pagination={pagination}
					scroll={scroll}
					expandable={expandable}
					bordered={bordered}
					onChange={handleTableChange}
				/>
			</div>
		</div>
	);
};

export default forwardRef(AjaxDataTable);

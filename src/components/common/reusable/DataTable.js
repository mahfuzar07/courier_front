import { Button, Space, Table } from 'antd';
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const DataTable = (
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
		if (columns) {
			transformColumns(columns);
		}
	}, [dataSource, columns]);

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

	return (
		<>
			<div>
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
			<Table
				rowSelection={rowSelection}
				columns={dataColumns}
				dataSource={data}
				pagination={pagination}
				scroll={scroll}
				expandable={expandable}
				bordered={bordered}
			/>
		</>
	);
};

export default forwardRef(DataTable);

import React, { useEffect, useState } from "react";
import qs from "qs";
import { Input, Table, DatePicker, Space, Button } from "antd";
import dayjs from "dayjs";
import { REPORT_PAGE_LIMIT } from "@/constants/tables";
import styles from "@/styles/dashboard/modules/_ajax_table.module.scss";
import { debounce } from "lodash";

const { RangePicker } = DatePicker;

const rangePresets = [
  {
    label: "Last 7 Days",
    value: [dayjs().add(-7, "d"), dayjs()],
  },
  {
    label: "Last 14 Days",
    value: [dayjs().add(-14, "d"), dayjs()],
  },
  {
    label: "Last 30 Days",
    value: [dayjs().add(-30, "d"), dayjs()],
  },
  {
    label: "Last 90 Days",
    value: [dayjs().add(-90, "d"), dayjs()],
  },
];

const AjaxReportTable = ({
  columns,
  tableData,
  paginationConfig,
  triggerTableChange,
  loading,
  filtersConfig={},
  allowFilters=true
}) => {
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: REPORT_PAGE_LIMIT,
    },
  });
  const [isRangePickerOpen, setIsRangePickerOpen] = useState(false);

  const [searchText, setSearchText] = useState("");
  const [dateRange, setDateRange] = useState([]);
  const [tableFiltersConfig, setTableFiltersConfig] = useState({
    DATE_RANGE_PICKER: {
      enable: false,
      field_name: "dates",
    },
    SEARCH: {
      enable: true,
      field_name: "search",
    },
  });

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

    return tableParams;
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
      for (let date of dates) __dateRange.push(date.format("YYYY-MM-DD"));

      updateTableParams(
        tableFiltersConfig.DATE_RANGE_PICKER.field_name,
        JSON.stringify(__dateRange)
      );
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

  useEffect(() => {
    triggerTableChange(tableParams);
  }, [JSON.stringify(tableParams)]);

  useEffect(() => {
    const _tableFiltersConfig = { ...tableFiltersConfig };

    if (filtersConfig?.DATE_RANGE_PICKER){
      _tableFiltersConfig.DATE_RANGE_PICKER = filtersConfig.DATE_RANGE_PICKER;
    }
    if (filtersConfig?.SEARCH){
      _tableFiltersConfig.SEARCH = filtersConfig.SEARCH;
    }

    setTableFiltersConfig(_tableFiltersConfig);
  }, [filtersConfig]);
  

  return (
    <div className={styles.table_container}>
      {allowFilters && (
        <div className={styles.header_area}>
          <Space.Compact>
            {tableFiltersConfig &&
              tableFiltersConfig?.DATE_RANGE_PICKER?.enable && (
                <RangePicker
                  style={{ width: "50%" }}
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
                        <Button
                          type="primary"
                          onClick={(e) => setIsRangePickerOpen(false)}
                        >
                          Apply
                        </Button>
                      </div>
                    );
                  }}
                />
              )}

            {tableFiltersConfig &&
              tableFiltersConfig?.SEARCH?.enable && (
                <Input.Search
                  style={{ width: "50%" }}
                  placeholder="Search"
                  allowClear
                  defaultValue={searchText}
                  onChange={(e) =>
                    debounce((val) => handleSearchChange(e.target.value), 500)
                  }
                  onSearch={(val) => handleSearchChange(val)}
                />
              )}
          </Space.Compact>
        </div>
      )}

      <Table
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={tableData}
        pagination={paginationConfig}
        loading={loading}
        onChange={handleTableChange}
      />
    </div>
  );
};
export default AjaxReportTable;

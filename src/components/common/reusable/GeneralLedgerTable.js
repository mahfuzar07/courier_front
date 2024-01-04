import { formatedDate } from "@/utils/date";
import React from "react";
import { Table } from "react-bootstrap";

const TableComponent = ({ data }) => {

  return (
    <Table bordered={false} size="sm" className="mt-3">
      <thead>
        <tr>
          <th
            style={{
              padding: "0px 2rem",
            }}
          >
            Date
          </th>
          <th>Source</th>
          <th>Description</th>
          <th>Debit</th>
          <th>Credit</th>
        </tr>
      </thead>
      <tbody>
        {data.map((parent) => {
          let total_debit = 0;
          let total_credit = 0;

          function getNetMovement(column){
            const nm = total_debit - total_credit;
            if (nm> 0 && column == "debit") {
                return nm.toLocaleString("en-US");
            }
            if (nm < 0 && column == "credit") {
                return Math.abs(nm).toLocaleString("en-US");
            }

            return '-'

          }

          return (
            <React.Fragment key={parent.id}>
              <tr>
                <td
                  colSpan="6"
                  style={{
                    "font-size": "1.2em",
                    "font-weight": "600",
                    padding: "10px 5px",
                  }}
                >
                  {parent.name}
                </td>
              </tr>
              {parent.transaction.map((transaction) => {
                total_debit += parseFloat(transaction.debit) || 0;
                total_credit += parseFloat(transaction.credit) || 0;
                return (
                  <tr key={transaction.id}>
                    {/* <td colSpan="1"></td> */}
                    <td
                      style={{
                        padding: "0px 2rem",
                      }}
                    >
                      {formatedDate(transaction.created_at, "ll")}
                    </td>
                    <td>{transaction.transaction.transaction_type}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.debit || "-"}</td>
                    <td>{transaction.credit || "-"}</td>
                  </tr>
                );
              })}
              <tr style={{ "font-weight": "500" }}>
                <td colSpan="3">Total {parent.name}</td>
                <td>{total_debit > 0 ? total_debit.toFixed(2) : "-"}</td>
                <td>{total_credit > 0 ? total_credit.toFixed(2) : '-'}</td>
              </tr>
              <tr style={{ "font-weight": "500" }}>
                <td colSpan="3">Net Movement</td>
                <td>{getNetMovement("debit")}</td>
                <td>{getNetMovement("credit")}</td>
              </tr>
            </React.Fragment>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableComponent;

import React from 'react';
import { Table } from 'react-bootstrap';
import { Divider } from 'antd';
import journal_report_style from '@/styles/dashboard/modules/_journal_report.module.scss';

const JournalReportTable = ({ transactions }) => {
	// Group transactions by transaction ID
	const groupedTransactions = transactions.reduce((groups, transaction) => {
		const { id } = transaction;
		if (!groups[id]) {
			groups[id] = [];
		}
		groups[id].push(transaction);
		return groups;
	}, {});

	return (
		<div className="container">
			<h2 className="mb-4">Journal Report</h2>
			<Table hover responsive>
				<thead>
					<tr>
						<th>Transaction ID</th>
						<th>Date</th>
						<th>Transaction Type</th>
						<th>Description</th>
						<th>Debit</th>
						<th>Credit</th>
					</tr>
				</thead>
				<tbody>
					{Object.keys(groupedTransactions).map((transactionId) => {
						let trDebit = 0;
						let trCredit = 0;
						return (
							<React.Fragment key={transactionId}>
								<tr className="transaction-id-row">
									<td colSpan={6}>
										<h6>Transaction ID: {transactionId}</h6>
									</td>
								</tr>
								{groupedTransactions[transactionId].map((transaction) => {
									return transaction.transaction_ref.map((tr) => {
										trDebit += parseFloat(tr.debit) || 0;
										trCredit += parseFloat(tr.credit) || 0;
										return (
											<tr key={tr.id}>
												<td></td>
												<td>{new Date(transaction.created_at).toLocaleDateString()}</td>
												<td>{transaction.transaction_type}</td>
												<td>{tr.description}</td>
												<td>{tr.debit || '-'}</td>
												<td>{tr.credit || '-'}</td>
											</tr>
										);
									});
								})}
								<tr className={journal_report_style.transactionTotalRow}>
									<td colSpan={4}>
										<p>Total:</p>
									</td>
									<td>{trDebit || '-'}</td>
									<td>{trCredit || '-'}</td>
								</tr>
							</React.Fragment>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};

export default JournalReportTable;

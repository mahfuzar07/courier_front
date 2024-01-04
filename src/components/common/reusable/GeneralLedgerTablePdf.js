import { formatedDate } from '@/utils/date';
import React from 'react';
import { Table } from 'react-bootstrap';
import { Page, Text, View, Document, PDFViewer, StyleSheet } from '@react-pdf/renderer';

const GeneralLedgerTablePdf = ({ data }) => {
	const styles = StyleSheet.create({
		body: {
			paddingTop: 25,
			paddingBottom: 50,
			paddingHorizontal: 22,
		},

		header: {
			fontSize: 13,
			fontWeight: 800,
			marginBottom: 20,
			textAlign: 'center',
			textTransform: 'uppercase',
		},
		table: {
			display: 'table',
			width: 'auto',
		},
		tableHeaderBg: {
			backgroundColor: '#E8E8E8',
		},
		tableRow: {
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'row',
		},
		tableCol: {
			flex: '1',
			display: 'flex',
			justifyContent: 'center',
			minHeight: '26px',
			padding: '0px 5px',
			borderStyle: 'solid',
			borderColor: '#E8E8E8',
			borderWidth: 1,
			borderLeftWidth: 0,
			borderTopWidth: 0,
			borderRightWidth: 0,
		},
		tableSpanCol: {
			flex: '3',
			display: 'flex',
			justifyContent: 'center',
			minHeight: '26px',
			padding: '0px 25px 0 5px',

			borderStyle: 'solid',
			borderColor: '#E8E8E8',
			borderWidth: 1,
			borderLeftWidth: 0,
			borderTopWidth: 0,
			borderRightWidth: 0,
		},

		tableCell: {
			fontSize: 9,
		},

		boldText: {
			fontWeight: 700,
		},
		bolderText: {
			fontSize: 11,
			fontWeight: 700,
		},

		pageNumber: {
			position: 'absolute',
			fontSize: 8,
			bottom: 20,
			left: 0,
			right: 0,
			textAlign: 'center',
			color: 'grey',
		},
		topHeader: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			fontSize: '9px',
			marginBottom: '15px',
			paddingBottom: '10px',
			borderBottom: '1px dashed #E0E0E0',
		},
		companyInfo: {
			display: 'flex',
			flexDirection: 'column',
			gap: '3px',
		},
		companyTitle: {
			fontSize: '12px',
		},
	});

	return (
		<Document>
			<Page size="A4" style={styles.body}>
				<View>
					<View style={styles.topHeader}>
						<View style={styles.companyInfo}>
							<Text style={styles.companyTitle}>Mudhir Retail Solution</Text>
							<Text>Mirpur Dhaka ,Bnagladesh</Text>
							<Text>010000000</Text>
						</View>
						<View style={styles.date}>
							<Text>Date: 01/25/2017</Text>
						</View>
					</View>
					<Text style={styles.header}>Ledger Report</Text>

					<View style={styles.table}>
						<View style={styles.tableHeaderBg} fixed>
							<View style={{ ...styles.tableRow, ...styles.boldText }}>
								<View style={styles.tableCol}>
									<Text style={styles.tableCell}>Date</Text>
								</View>
								<View style={styles.tableCol}>
									<Text style={styles.tableCell}>Source</Text>
								</View>
								<View style={styles.tableCol}>
									<Text style={styles.tableCell}>Description</Text>
								</View>
								<View style={styles.tableCol}>
									<Text style={styles.tableCell}>Debit</Text>
								</View>
								<View style={styles.tableCol}>
									<Text style={styles.tableCell}>Credit</Text>
								</View>
							</View>
						</View>

						<View>
							{data.map((parent) => {
								let total_debit = 0;
								let total_credit = 0;

								function getNetMovement(column) {
									const nm = total_debit - total_credit;
									if (nm > 0 && column == 'debit') {
										return nm.toLocaleString('en-US');
									}
									if (nm < 0 && column == 'credit') {
										return Math.abs(nm).toLocaleString('en-US');
									}

									return '-';
								}

								return (
									<View key={parent.id}>
										<View style={styles.tableRow}>
											<View style={styles.tableCol}>
												<Text style={styles.bolderText}>{parent.name}</Text>
											</View>
										</View>

										{parent.transaction.map((transaction) => {
											total_debit += parseFloat(transaction.debit) || 0;
											total_credit += parseFloat(transaction.credit) || 0;
											return (
												<View style={styles.tableRow} key={transaction.id}>
													<View style={styles.tableCol}>
														<Text style={styles.tableCell}>{formatedDate(transaction.created_at, 'll')}</Text>
													</View>

													<View style={styles.tableCol}>
														<Text style={styles.tableCell}>{transaction.transaction.transaction_type}</Text>
													</View>

													<View style={styles.tableCol}>
														<Text style={styles.tableCell}>{transaction.description}</Text>
													</View>

													<View style={styles.tableCol}>
														<Text style={styles.tableCell}>{transaction.debit || '-'}</Text>
													</View>

													<View style={styles.tableCol}>
														<Text style={styles.tableCell}>{transaction.credit || '-'}</Text>
													</View>
												</View>
											);
										})}

										<View style={styles.tableRow}>
											<View style={styles.tableSpanCol}>
												<Text style={{ ...styles.tableCell, ...styles.boldText }}>Total {parent.name}</Text>
											</View>

											<View style={styles.tableCol}>
												<Text style={styles.tableCell}>{total_debit > 0 ? total_debit.toFixed(2) : '-'}</Text>
											</View>

											<View style={styles.tableCol}>
												<Text style={styles.tableCell}>{total_credit > 0 ? total_credit.toFixed(2) : '-'}</Text>
											</View>
										</View>

										<View style={styles.tableRow}>
											<View style={styles.tableSpanCol}>
												<Text style={{ ...styles.tableCell, ...styles.boldText }}>Net Movement</Text>
											</View>

											<View style={styles.tableCol}>
												<Text style={styles.tableCell}>{getNetMovement('debit')}</Text>
											</View>

											<View style={styles.tableCol}>
												<Text style={styles.tableCell}>{getNetMovement('credit')}</Text>
											</View>
										</View>
									</View>
								);
							})}
						</View>
					</View>
				</View>

				<Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
			</Page>
		</Document>
	);
};

export default GeneralLedgerTablePdf;

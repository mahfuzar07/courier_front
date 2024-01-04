import React from 'react';
import { Page, Text, View, Document, PDFViewer, StyleSheet } from '@react-pdf/renderer';
const JournalReportTablePdf = ({ transactions }) => {
	const groupedTransactions = transactions.reduce((groups, transaction) => {
		const { id } = transaction;
		if (!groups[id]) {
			groups[id] = [];
		}
		groups[id].push(transaction);
		return groups;
	}, {});

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
			flex: '4',
			display: 'flex',
			justifyContent: 'center',
			minHeight: '26px',
			padding: '0px 15px',
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
			fontWeight: '800',
		},
		bolderText: {
			fontSize: 11,
			fontWeight: '800',
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
      gap:'3px'
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
					<Text style={styles.header}>Journal Report</Text>

					<View style={styles.table}>
						<View style={styles.tableHeaderBg} fixed>
							<View style={{ ...styles.tableRow, ...styles.boldText }}>
								<View style={styles.tableCol}>
									<Text style={styles.tableCell}>Transaction ID</Text>
								</View>

								<View style={styles.tableCol}>
									<Text style={styles.tableCell}>Date</Text>
								</View>

								<View style={styles.tableCol}>
									<Text style={styles.tableCell}>Transaction Type</Text>
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
							{Object.keys(groupedTransactions).map((transactionId) => {
								let trDebit = 0;
								let trCredit = 0;
								return (
									<View key={transactionId}>
										<View style={styles.tableRow}>
											<View style={styles.tableCol}>
												<Text style={styles.bolderText}>Transaction ID: {transactionId}</Text>
											</View>
										</View>
										{groupedTransactions[transactionId].map((transaction) => {
											return transaction.transaction_ref.map((tr) => {
												trDebit += parseFloat(tr.debit) || 0;
												trCredit += parseFloat(tr.credit) || 0;
												return (
													<View style={styles.tableRow} key={tr.id}>
														<View style={styles.tableCol}></View>
														<View style={styles.tableCol}>
															<Text style={styles.tableCell}>
																{new Date(transaction.created_at).toLocaleDateString()}
															</Text>
														</View>
														<View style={styles.tableCol}>
															<Text style={styles.tableCell}>{transaction.transaction_type}</Text>
														</View>
														<View style={styles.tableCol}>
															<Text style={styles.tableCell}>{tr.description}</Text>
														</View>

														<View style={styles.tableCol}>
															<Text style={styles.tableCell}>{tr.debit || '-'}</Text>
														</View>
														<View style={styles.tableCol}>
															<Text style={styles.tableCell}>{tr.credit || '-'}</Text>
														</View>
													</View>
												);
											});
										})}
										<View style={styles.tableRow}>
											<View style={styles.tableSpanCol}>
												<Text style={{ ...styles.tableCell, ...styles.boldText }}>Total:</Text>
											</View>
											<View style={styles.tableCol}>
												<Text style={{ ...styles.tableCell, ...styles.boldText }}> {trDebit || '-'}</Text>
											</View>
											<View style={styles.tableCol}>
												<Text style={{ ...styles.tableCell, ...styles.boldText }}> {trCredit || '-'}</Text>
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

export default JournalReportTablePdf;

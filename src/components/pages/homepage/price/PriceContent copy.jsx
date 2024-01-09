import Image from "next/legacy/image";
import React, { useState, useEffect } from 'react';
import { BsArrowRightCircleFill, BsCheckCircle, BsCheckCircleFill, BsFire } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
// import PageBreadcrumb from '../homepage/common/PageBreadcrumb';
// import { useQuery } from 'react-query';
// import Queries from '@/constants/queries';
// import SubscriptionService from '@/services/api/subscription.service';
import axios from 'axios';
import { apiUrl } from '../../../../services/apiEndpoint';
import { BaseApiUrl } from '../../../../config/config';

const PriceContent = () => {
	// const { data: packages } = useQuery([Queries.catalog], SubscriptionService.getPackageCatalog);
	const [priceIngData, setPriceingData] = useState();

	const getPriceingData = async () => {
		return await axios
			.get(BaseApiUrl + apiUrl.geSubscriptionData)
			.then((res) => {
				setPriceingData(res.data);
				console.log('res.data', res.data);
			})
			.catch((err) => console.log(err));
	};

	const priceCompareItem = [
		{
			feature: 'Unlimited Drivers',
			starter: true,
			business: true,
			enterprise: true,
		},
		{
			feature: 'Unlimited Users',
			starter: true,
			business: false,
			enterprise: true,
		},
		{
			feature: 'Unlimited Drivers',
			starter: true,
			business: false,
			enterprise: true,
		},
		{
			feature: 'Unlimited Users',
			starter: true,
			business: false,
			enterprise: false,
		},
		{
			feature: 'Unlimited Drivers',
			starter: true,
			business: true,
			enterprise: false,
		},
		{
			feature: 'Unlimited Users',
			starter: true,
			business: false,
			enterprise: true,
		},
	];

	useEffect(() => {
		getPriceingData();
	}, []);

	return (
		<div className="page_main_content_wrapepr">
			<div className="price_section_wrapper">
				<h5 className="page_title">Transparent & Fair</h5>
				<div className="container">
					<div className="price_plan_section_wrapper">
						<div className="price_plan_section">
							{priceIngData?.map((packag) => (
								<div key={packag.id} className="price_plan_section_card">
									<div className="price_plan_section_card_title">
										<h5 className="card_title">{packag?.subscription_package?.title}</h5>
									</div>

									<div className="price_plan_body">
										<div className="price_plan_section_card_price">
											<div className="card_price_wrapper">
												<p className="card_price_symbol">৳</p>
												<h5 className="card_price">{packag?.subscription_package?.price}</h5>
											</div>
											<span className="card_price_month">/ Monthly</span>
										</div>

										<ul className="card_plan_list_wrapper">
											<li style={{ textAlign: 'center' }}>Admin Limit {packag?.admin_limit}</li>
											<li style={{ textAlign: 'center' }}>Marchant Limit {packag?.marchant_limit}</li>
											<li style={{ textAlign: 'center' }}>Rider Limit {packag?.rider_limit}</li>
											<li style={{ textAlign: 'center' }}>Per Month Order Limit {packag?.per_month_order}</li>
											<li style={{ textAlign: 'center' }}>
												{packag?.live_tracking ? <CheckOutlined /> : <CloseOutlined />} Live Tracking{' '}
												{packag?.export_to_excel ? 'Yes' : 'No'}
											</li>
											<li style={{ textAlign: 'center' }}>
												{packag?.export_to_excel ? <CheckOutlined /> : <CloseOutlined />} Export To Excel{' '}
												{packag?.export_to_excel ? 'Yes' : 'No'}
											</li>
											<li style={{ textAlign: 'center' }}>
												{packag?.export_to_excel ? <CheckOutlined /> : <CloseOutlined />} Export To PDF{' '}
												{packag?.export_to_pdf ? 'Yes' : 'No'}
											</li>
											<li style={{ textAlign: 'center' }}>
												{packag?.export_to_excel ? <CheckOutlined /> : <CloseOutlined />} Rider Mobile APP{' '}
												{packag?.rider_mobile_app ? 'Yes' : 'No'}
											</li>

											{/* {packag?.features?.map((item, index) => (
												<li key={index} className="card_plan_list">
													{item.is_active ? <BsCheckCircleFill className="item_list_icon" size={20} /> :  <MdCancel className="item_icon_false" style={{ color: 'rgba(219, 89, 100, 0.895)' }} size={24} />}
													<p className="item_list_title">{item?.feature}</p>
												</li>
											))} */}
										</ul>
									</div>

									<button className="price_plan_button">Get Started</button>
								</div>
							))}
						</div>

						<div className="price_compare_section">
							<h5 className="price_compare_section_title">Compare Plans</h5>

							<div className="price_compare_table_wrapper">
								<table className="price_compare_table">
									<thead className="price_compare_tablehead">
										<tr>
											<th>Features</th>
											<th>
												<p>starter</p>
												<span>$ 125 / Monthly</span>
											</th>
											<th>
												<p>Business</p>
												<span>$ 125 / Monthly</span>
											</th>
											<th>Enterprise </th>
										</tr>
									</thead>
									<tbody className="price_compare_tablebody">
										{priceCompareItem.map((item, index) => (
											<tr key={index}>
												<td>
													<div className="price_compare_feature_wrapper">
														<BsArrowRightCircleFill className="item_list_icon" size={18} />
														<span>{item.feature}</span>
													</div>
												</td>
												<td>
													{item?.starter === true ? (
														<BsCheckCircleFill className="item_icon_true" size={20} />
													) : (
														<MdCancel className="item_icon_false" size={24} />
													)}
												</td>{' '}
												<td>
													{item?.business === true ? (
														<BsCheckCircleFill className="item_icon_true" size={20} />
													) : (
														<MdCancel className="item_icon_false" size={24} />
													)}
												</td>{' '}
												<td>
													{item?.enterprise === true ? (
														<BsCheckCircleFill className="item_icon_true" size={20} />
													) : (
														<MdCancel className="item_icon_false" size={24} />
													)}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PriceContent;

'use client';
import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

import Image from 'next/image';
import { MdAppsOutage, MdDashboardCustomize, MdLogout, MdOutlinePriceChange } from 'react-icons/md';
import { Divider, Form, Radio, Skeleton, Space, Switch } from 'antd';

import * as qs from 'qs';
import SiteService from '@/services/api/site.service';
import { apiEndpoint } from '@/services/apiEndpoint';
import { baseUrl } from '@/config/config';

function DashboardSidebar({ isLoading, settingsData, navfold, phoneActive, setNavfold }) {
	const router = useRouter();
	const pathname = usePathname();

	const fetchSSOData = () => {
		SiteService.fetchSSOApi(baseUrl + apiEndpoint.SSO)
			.then((res) => {
				const url = `http://${res?.domain_data?.domain}:3000/verifysso-login`;
				const params = {
					bearer: localStorage.getItem('token'),
					token: res?.token_data,
				};
				router.push(url + `?${qs.stringify(params)}`);
			})
			.catch((err) => {
				console.log('Error', err);
			});
	};

	const sidebarItem = [
		{
			title: 'Go Application',
			// url: '/user/dashboard',
			// url: `${fetchSSOData}`,

			fn: true,
			icon: <MdAppsOutage size={20} />,
		},
		{
			title: 'Dashboard',
			url: '/user/dashboard',
			icon: <MdDashboardCustomize size={20} />,
		},
		{
			title: 'Billing',
			url: '/user/dashboard/billing',
			icon: <MdOutlinePriceChange size={20} />,
		},
		{
			title: 'Change Password',
			url: '/user/dashboard/change-password',
			icon: <MdOutlinePriceChange size={20} />,
		},
	];

	const handleMenuItemClick = (item) => {
		if (item?.fn) {
			fetchSSOData();
		} else {
			router.push(item.url);
		}

		if (phoneActive) {
			setNavfold((prevNavfold) => !prevNavfold);
		}
	};

	const LogOut = () => {
		localStorage.clear();
		// return router.push('/login');
	};

	return (
		<>
			<div className={`${phoneActive ? 'dashboard_mobile_sidebar_wrapper' : 'dashboard_sidebar_wrapper'}   ${navfold ? 'fold' : ''}`}>
				<div className="dahboard_sidebar_content_wrapper">
					<Skeleton loading={isLoading} active={true} paragraph={false} rows={1} block>
						<div className="dashboard_brand_wrapper">
							<Image alt="brand" layout="fill" src={settingsData?.application_setting_data?.application_logo} />
						</div>
					</Skeleton>
					<Skeleton loading={isLoading} active={true} avatar={true}>
						<div className="dashboard_user_info_wrapper">
							<div className="dashboard_user_image_wrapper">
								<Image alt="avatar" layout="fill" src={settingsData?.user_profile_info?.profile_picture} />
							</div>
							<h5 className="dashboard_user_title">{settingsData?.user_profile_info?.name}</h5>
							<p className="dashboard_user_package">Basic Free</p>
						</div>
					</Skeleton>

					<div className="dashboard_menu_wrapper">
						<ul className="dashboard_sidebar_item_wrapper">
							{sidebarItem.map((item, index) => (
								<li
									className={pathname.startsWith(item.url) ? 'dashboard_sidebar_item active_route' : 'dashboard_sidebar_item'}
									key={index}
									onClick={() => handleMenuItemClick(item)}
								>
									<div className="dashboard_sidebar_item_content">
										{item.icon}
										<span>{item.title}</span>
									</div>
								</li>
							))}
							<li className="dashboard_sidebar_item" onClick={LogOut}>
								<div className="dashboard_sidebar_item_content">
									<MdLogout size={20} />
									<span>Log Out</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default DashboardSidebar;

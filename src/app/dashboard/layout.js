'use client';
import React, { useState, useEffect } from 'react';
import { metadatas } from '@/data/metadatas';
import DashboardSidebar from '@/components/common/dashboard/DashboardSidebar';
import DashboradFooter from '@/components/common/dashboard/DashboradFooter';
import { MdOutlineMenu } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import TanentInfoService from '@/services/api/tanentInfo.service';

import { useQuery } from '@tanstack/react-query';
// Meta Data:
export default function DashboardLayout({ children }) {
	const {
		data: settingsData,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['newData'],
		queryFn: () => TanentInfoService.getTanentInfo(),
		onSuccess: (data) => {
			return data;
		},
		onError: (error) => {
			console.error('Error fetching tanent info:', error);
		},
	});
	const [navfold, setNavfold] = useState(false);
	const router = useRouter();
	const isWindowDefined = typeof window !== 'undefined';
	const [phoneActive, setPhoneActive] = useState(isWindowDefined && window.innerWidth < 768);
	const [loading, setLoading] = useState(false);



	useEffect(() => {
		const handleResize = () => {
			const isPhoneActive = window.innerWidth < 768;
			setPhoneActive(isPhoneActive);

			if (isPhoneActive) {
				setNavfold(true);
			} else {
				setNavfold(false);
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		const token = localStorage.getItem('token');
		const refresh = localStorage.getItem('refresh');

		if (token && refresh) {
			// router.push('/login');
			console.log('unauthorized');
		} else {
			setLoading(false);
		}
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="dashboard_wrapper">
			<DashboardSidebar isLoading={isLoading} phoneActive={phoneActive} navfold={navfold} setNavfold={setNavfold} settingsData={settingsData} />

			<div className="dashboard_main_content_wrapper">
				<div className="dashboard_header_wrapper">
					<div className="header_content">
						<MdOutlineMenu
							size={26}
							onClick={() => {
								setNavfold(!navfold);
							}}
						/>
					</div>
				</div>
				<div className="dashboard_content_wrapper">{children}</div>
				<DashboradFooter />
			</div>
		</div>
	);
}

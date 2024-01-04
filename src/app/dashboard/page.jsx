'use client';

import { TeamOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import TanentInfoService from '@/services/api/tanentInfo.service';
import { useQuery } from '@tanstack/react-query';

const DashboardPage = () => {

	const { data: dashboardData } = useQuery({
		queryKey: ['admindata'],
		queryFn: TanentInfoService.getTanentAdminInfo(),
		onError: (error) => {
			console.error('Error fetching tanent admin data:', error);
		},
	});

	return (
		<div>
			<div className="">
				<Row gutter={16}>
					<Col span={6}>
						<Card bordered={false}>
							<Statistic
								title="Total User"
								value={dashboardData?.total_user}
								valueStyle={{ color: '#3f8600' }}
								prefix={<TeamOutlined />}
							/>
						</Card>
					</Col>
					<Col span={6}>
						<Card bordered={false}>
							<Statistic
								title="Total Admin"
								value={dashboardData?.total_admin}
								valueStyle={{ color: '#00baff' }}
								prefix={<TeamOutlined />}
							/>
						</Card>
					</Col>
					<Col span={6}>
						<Card bordered={false}>
							<Statistic
								title="Total Merchant"
								value={dashboardData?.total_marchant}
								valueStyle={{ color: '#ffc107' }}
								prefix={<TeamOutlined />}
							/>
						</Card>
					</Col>
					<Col span={6}>
						<Card bordered={false}>
							<Statistic
								title="Total Rider"
								value={dashboardData?.total_rider}
								valueStyle={{ color: '#fa561494' }}
								prefix={<TeamOutlined />}
							/>
						</Card>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default DashboardPage;

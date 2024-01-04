'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Form, Input, Spin, Row, Col } from 'antd';
import SubmitButton from '@/components/common/reusable/SubmitButton';

const RegistrationPage = () => {
	const [loading, setLoading] = useState(false);

	const [form] = Form.useForm();

	const handleSubmit = () => {};
	return (
		<>
			<div className="auth_from_content">
				<div className="auth_from_title">
					<h2>Create An Account</h2>
				</div>

				<Spin spinning={loading}>
					<Form form={form} layout="vertical" onFinish={handleSubmit}>
						<Form.Item
							name="first"
							label="Full Name"
							rules={[
								{
									required: true,
									message: 'Please input your First Name!',
								},
							]}
						>
							<Input placeholder="Enter your name" />
						</Form.Item>

						<Form.Item
							name="email"
							label="Email"
							rules={[
								{
									required: true,
									message: 'Please input your Email!',
								},
							]}
						>
							<Input placeholder="Enter your email" />
						</Form.Item>

						<Form.Item
							name="password"
							label="Password"
							rules={[
								{
									required: true,
									message: 'Please input your First Name!',
								},
							]}
						>
							<Input.Password placeholder="Enter your password" />
						</Form.Item>

						<Form.Item
							name="confirm_password"
							label="Confirm password"
							rules={[
								{
									required: true,
									message: 'Please input your First Name!',
								},
							]}
						>
							<Input.Password placeholder="Enter your confirm password" />
						</Form.Item>

						<SubmitButton title="Submit Details" form={form} loading={loading} />
					</Form>
				</Spin>

				<div className="back_register">
					<p>Have A Account ?</p>
					<Link href="/login">Please Log in</Link>
				</div>
			</div>
		</>
	);
};

export default RegistrationPage;

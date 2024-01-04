'use client';
import React, { useEffect, useState, useTransition } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Form, Input, Spin, Checkbox, Button } from 'antd';
import { FcGoogle } from 'react-icons/fc';
import SubmitButton from '@/components/common/reusable/SubmitButton';
const LoginPage = () => {
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const authStatus = !'authenticated';

	const handleSubmit = () => {};

	return (
		<>
			<div className="auth_from_content">
				<div className="auth_from_title">
					<h2>Sign In</h2>
				</div>

				<div className="from_social_login_area">
					<Button
						className="from_social_login_button"
						// disabled={authStatus == 'loading' || authStatus == 'authenticated'}
						// loading={sociallLoading}
						// onClick={(e) => googleSignIn()}
					>
						<FcGoogle />
						<span>Sign in with Google</span>
					</Button>
					<div className="after_devider">
						<span className="after_devider_text">or Sign in with Email</span>
					</div>
				</div>

				<Spin spinning={loading}>
					<Form
						form={form}
						layout="vertical"
						onFinish={handleSubmit}
						// disabled={sociallLoading || authStatus == 'loading' || authStatus == 'authenticated'}
						// initialValues={{
						// 	remember: true,
						// }}
					>
						<Form.Item
							name="email"
							label="Email"
							rules={[
								{
									required: true,
									type: 'email',
									message: 'Please input your valid email!',
								},
							]}
						>
							<Input placeholder="example@gmail.com" prefix={<MailOutlined className="site-form-item-icon" />} />
						</Form.Item>

						<Form.Item
							name="password"
							label="Password"
							rules={[
								{
									required: true,
									message: 'Please input your password!',
								},
							]}
						>
							<Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="password12345" />
						</Form.Item>

						<div className="flex_between my-3">
							<Form.Item
								name="remember"
								noStyle
								rules={[
									{
										required: false,
									},
								]}
							>
								<Checkbox>Remember me</Checkbox>
							</Form.Item>

							<Link className="login-form-forgot" href="/password-reset">
								Forgot password
							</Link>
						</div>

						<SubmitButton title="Login" form={form} loading={loading} />
					</Form>
				</Spin>

				<div className="back_register">
					<p>Not Registerd Yet ?</p>
					<Link href="/registration">Create An Account</Link>
				</div>
			</div>
		</>
	);
};

export default LoginPage;

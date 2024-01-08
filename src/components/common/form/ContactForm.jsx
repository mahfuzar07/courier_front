'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Form, Input, Spin, Row, Col } from 'antd';
import SubmitButton from '@/components/common/reusable/SubmitButton';
const { TextArea } = Input;
const ContactForm = () => {
	const [loading, setLoading] = useState(false);

	const [form] = Form.useForm();

	const handleSubmit = () => {};
	return (
		<div>
			<Form form={form} layout="vertical" onFinish={handleSubmit}>
				<Form.Item
					name="first"
					rules={[
						{
							required: true,
							message: 'Please input your First Name!',
						},
					]}
				>
					<Input placeholder="Full Name" />
				</Form.Item>

				<Form.Item
					name="phone"
					rules={[
						{
							required: true,
							message: 'Please input your Phone',
						},
					]}
				>
					<Input type="number" placeholder="Mobile Number" />
				</Form.Item>

				<Form.Item
					name="email"
					rules={[
						{
							required: true,
							type: 'email',
							message: 'Please input your valid Email!',
						},
					]}
				>
					<Input placeholder="Email" />
				</Form.Item>

				<Form.Item
					name="company"
					rules={[
						{
							required: true,
							message: 'Company Name',
						},
					]}
				>
					<Input placeholder="Company Name" />
				</Form.Item>

				<Form.Item
					name="message"
					rules={[
						{
							required: true,
							message: 'Enter Your Message',
						},
					]}
				>
					<TextArea rows={4} placeholder="Write Something" />
				</Form.Item>

				<SubmitButton title="Send Message" form={form} loading={loading} />
			</Form>
		</div>
	);
};

export default ContactForm;

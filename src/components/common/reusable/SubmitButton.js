import React, { useState, useEffect } from 'react';
import { Button, Form } from 'antd';

const SubmitButton = ({ title, form, loading = false }) => {
	const [submittable, setSubmittable] = useState(false);

	// Watch all values
	const values = Form.useWatch([], form);

	useEffect(() => {
		form.validateFields({
			validateOnly: true,
		}).then(
			() => {
				setSubmittable(true);
			},
			() => {
				setSubmittable(false);
			}
		);
	}, [values]);

	return (
		<Button className='submit_button' style={{ width: '100%' }} htmlType="submit" loading={loading} disabled={!submittable}>
			{title}
		</Button>
	);
};

export default SubmitButton;

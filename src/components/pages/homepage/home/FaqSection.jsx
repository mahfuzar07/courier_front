import React from 'react';
import FaqAccordion from '@/components/common/home-page/FaqAccordion';

const FaqSection = () => {
	const sections = [
		{
			title: 'What is delivery management software?',
			content:
				'Delivery Management Software is a system that helps businesses streamline and optimize their delivery operations. It typically includes features such as real-time tracking, route optimization, order management, and proof of delivery.',
		},
		{
			title: 'How does Delivery Management Software benefit businesses?',
			content:
				'Delivery Management Software is a system that helps businesses streamline and optimize their delivery operations. It typically includes features such as real-time tracking, route optimization, order management, and proof of delivery.',
		},
		{
			title: 'How does Delivery Management Software benefit businesses?',
			content:
				'Delivery Management Software is a system that helps businesses streamline and optimize their delivery operations. It typically includes features such as real-time tracking, route optimization, order management, and proof of delivery.',
		},
		{
			title: 'How does Delivery Management Software benefit businesses?',
			content:
				'Delivery Management Software is a system that helps businesses streamline and optimize their delivery operations. It typically includes features such as real-time tracking, route optimization, order management, and proof of delivery.',
		},
		// Add more sections as needed
	];
	return (
		<div className="faq_section_wrapper">
			<h1 className="section_title">Frequently Asked Questions</h1>
			<div className="container">
				<div className="faq_section">
					<FaqAccordion sections={sections} />
				</div>
			</div>
		</div>
	);
};

export default FaqSection;

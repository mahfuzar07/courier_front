'use client';
import Image from "next/legacy/image";
import { useEffect, useState } from 'react';

function ApplicationSection() {
	const [currentTab, setCurrentTab] = useState(0);

	const tabItems = [
		{
			image: '/assets/application/tab-1.png',
			title: 'Dashboard',
		},
		{
			image: '/assets/application/tab-2.png',
			title: 'Customer App',
		},
		{
			image: '/assets/application/tab-3.png',
			title: 'Agent App',
		},
	];
	const handleTabClick = (index) => {
		setCurrentTab(index);
	};

	return (
		<div className="application_section_wrapper">
			<div className="application_section">
				<h1 className="section_title">Delivery Business Interface</h1>
				<div className="container">
					<div className="application_tab">
						<div className="tab_item">
							{tabItems.map((item, index) => (
								<div className="tab_item" key={index}>
									<button
										style={{ color: 'white', padding: '10px 20px' }}
										className={`${currentTab === index ? 'primary_button' : 'primary_button_border'}`}
										onClick={() => handleTabClick(index)}
									>
										{item.title}
									</button>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="tab_content">
				<Image src={tabItems[currentTab].image} alt={tabItems[currentTab].title} layout="fill" />
			</div>
		</div>
	);
}

export default ApplicationSection;

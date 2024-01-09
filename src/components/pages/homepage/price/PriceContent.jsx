'use client';
import React, { useState } from 'react';
import PriceCard from './PriceCard';

const PriceContent = () => {
	const [activeButton, setActiveButton] = useState('monthly');

	const toggleButton = (type) => {
		setActiveButton(type);
	};

	return (
		<div className="pricing_section_wrapper">
			<div className="container">
				<div className="pricing_section">
					<div className="price_section_top">
						<div className="price_top_button_wrapper">
							<button onClick={() => toggleButton('monthly')}>Monthly</button>
							<button onClick={() => toggleButton('yearly')}>Yearly</button>
							<div className={`indicator ${activeButton === 'monthly' ? 'monthly_active' : 'yearly_active'}`}></div>
						</div>
					</div>
					<div className="price_plan_section_wrapper">
						<div className="price_plan_section">
							<PriceCard />
							<PriceCard />
							<PriceCard />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PriceContent;

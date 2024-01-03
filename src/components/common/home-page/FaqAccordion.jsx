"use client"
import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

const FaqAccordion = ({ sections }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const toggleAccordion = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className="accordion_wrapper">
			{sections.map((section, index) => (
				<div className="accordion_item" key={index}>
					<div className={`accordion_item__header_wrapper ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
						<h1 className="header_title">{section.title}</h1>
						<FaChevronRight style={{ transform: activeIndex === index ? 'rotate(90deg)' : '', transition: 'transform 0.5s ease' }} />
					</div>

					<div className={`accordion_item__content  ${activeIndex === index ? 'active' : ''}`}>{section.content}</div>
				</div>
			))}
		</div>
	);
};

export default FaqAccordion;

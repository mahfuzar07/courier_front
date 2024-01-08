import React from 'react';

const SectionTitle = ({ title, strong, subtitle }) => {
	return (
		<div className="section_title_wrapper">
			{title && (
				<h1 className="section_title">
					{title} {strong && <strong>{strong}</strong>}
				</h1>
			)}
			{subtitle && <p className="section_subtitle">{subtitle}</p>}
		</div>
	);
};

export default SectionTitle;

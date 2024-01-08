import React from 'react'

const ContentTitle = ({ title, strong, subtitle }) => {
	return (
		<div className="page_content_title_wrapper">
			{title && (
				<h1 className="page_content_title">
					{title} {strong && <strong>{strong}</strong>}
				</h1>
			)}
			{subtitle && <p className="section_subtitle">{subtitle}</p>}
		</div>
	);
};

export default ContentTitle
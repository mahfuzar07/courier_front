'use client';

import React, { useState, useEffect } from 'react';

const Footer = () => {
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentYear(new Date().getFullYear());
		}, 60000); // Update the year every minute

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="footer_section">
			<div className="container">
				<div className="copyright_wrapper">
					<div className="copyright"> Developed By Update Tech Ltd &copy; 2023 - {currentYear}</div>
					<div className="social">
						<p>
							Contact us via email: <a href="mailto:updatetechltd@contact.com">updatetechltd@contact.com</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FaPlayCircle, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
	const [showScroll, setShowScroll] = useState(false);
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

	const [generalSettingData, setGeneralSettingData] = useState();

	useEffect(() => {
		window.addEventListener('scroll', checkScrollTop);
		return () => window.removeEventListener('scroll', checkScrollTop);
	}, []);

	const checkScrollTop = () => {
		if (window.pageYOffset > 200) {
			setShowScroll(true);
		} else if (window.pageYOffset <= 200) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		setShowScroll(false);
	};
	const footerMenu = [
		{
			menuHead: 'product',
			menuItems: [
				{
					link: '/',
					title: 'Features',
				},
				{
					link: '/',
					title: 'API',
				},
				{
					link: '/',
					title: 'Solutions',
				},
			],
		},
		{
			menuHead: 'company',
			menuItems: [
				{
					link: '/',
					title: 'about us',
				},
				{
					link: '/',
					title: 'blog',
				},
				{
					link: '/',
					title: 'contsact us',
				},
			],
		},
		{
			menuHead: 'support',
			menuItems: [
				{
					link: '/',
					title: 'support center',
				},
				{
					link: '/',
					title: 'language',
				},
			],
		},
	];

	useEffect(() => {
		setCurrentYear(new Date().getFullYear());
	}, []);

	return (
		<div className="footer_section_wrapper">
			<div className="footer_top_section_wrapper">
				<div className="container">
					<div className="footer_top_section">
						<div className="circle_effect"></div>
						<div className="footer_top_card">
							<div className="footer_top_info">
								<h1 className="info_title">Advanced Fleet tracking Solution Tracker</h1>
								<div className="info_button_wrapper">
									<button className="primary_button">get started</button>
									<div className="button_icon_wrapper">
										<FaPlayCircle size={22} />
										<span className="">Watch how it works</span>
									</div>
								</div>
							</div>
							<div className="footer_top_image">
								<Image src="/assets/footer/footer-top-image.png" alt="Picturer" layout="fill" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer_section">
				<div className="footer_section_card_wrapper">
					<div className="container">
						<div className="footer_card_wrapper">
							<div className="footer_card">
								{footerMenu?.map((item, index) => (
									<div className="footer_item_section" key={index}>
										<h1 className="footer_item_title">{item.menuHead}</h1>
										<ul>
											{item?.menuItems.map((menuItem, _index) => (
												<li key={_index}>{menuItem.title}</li>
											))}
										</ul>
									</div>
								))}
							</div>
							<div className="footer_social_section_wrapper">
								<h1 className="footer_social_title">Follow Us :</h1>
								<ul>
									<li>
										<FaFacebookF size={22} />
									</li>
									<li>
										<FaTwitter size={22} />
									</li>
									<li>
										<FaLinkedinIn size={22} />
									</li>
									<li>
										<FaInstagram size={22} />
									</li>
								</ul>
							</div>
						</div>
					</div>
					<p className="footer_copyright_title">&copy;{` 2023 - ${currentYear} Update Tech Ltd. All rights reserved`}</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;

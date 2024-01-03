'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { GiSplitCross } from 'react-icons/gi';
import { useRouter, usePathname } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';
import { Skeleton } from 'antd';

const Header = () => {
	const [navfix, setNavfix] = useState(true);
	const [prevScrollY, setPrevScrollY] = useState(0);
	const [navfold, setNavfold] = useState(false);

	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > prevScrollY) {
				setNavfix(false);
			} else {
				setNavfix(true);
			}
			setPrevScrollY(currentScrollY);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollY]);

	const navItem = [
		{
			link: '/',
			title: 'Home',
		},
		{
			link: '/price',
			title: 'Pricing',
			activeURL: '/price',
		},
		{
			link: '/features',
			title: 'Features',
			// submenu: sortedFeatures,
			activeURL: '/features',
		},
		{
			link: '/blog',
			title: 'Blog',
			activeURL: '/blog',
		},

		{
			link: '/about',
			title: 'About',
			activeURL: '/about',
		},
		{
			link: '/contact',
			title: 'Contact us',
			activeURL: '/contact',
		},
	];

	const handleMenuItemClick = (link) => {
		router.push(link);
		setNavfold(false);
	};

	return (
		<div className={`header_area ${navfix ? 'visible' : 'hidden'}`}>
			<div className="container">
				<div className="header_wrapper">
					<div className="header_logo">
						<Link href="/" passHref legacyBehavior>
							<Image
								src="/images/updatetechlogo.png"
								alt="Picturer"
								fill
								sizes="100vw"
								style={{
									objectFit: 'contain',
									objectPosition: 'left',
								}}
							/>
						</Link>
					</div>

					<div className="header_navbar_link">
						<ul className="nav-menu-ul">
							{navItem.map((item, index) => (
								<li className="nav_menu_item" key={index}>
									{item.link === '/features' ? (
										<>
											<span
												className={`custom_menu_link ${pathname === item.activeURL ? 'active' : ''}`}
												href={item.link}
												onClick={() => handleMenuItemClick(`/features}`)}
											>
												{item.title}
											</span>

											{item?.submenu && (
												<ul className="nav_submenu_ul">
													<div className="submenu_list_wrapper">
														<Skeleton loading={isLoading} active={true}>
															{item?.submenu?.map((_item, index) => (
																<li className="sub_menu_item" key={_item.id}>
																	<div className="list_card_image_wrapper">
																		<Image
																			src={_item.icon}
																			alt="Picturer"
																			fill
																			style={{
																				objectFit: 'contain',
																			}}
																		/>
																	</div>
																	<Link href="/features/[slug]" as={`/features/${_item.slug}`}>
																		<div className="list_card_title_wrapper">
																			<h6 className="submenu_title">{_item.title}</h6>
																			<p className="submenu_subtitle">{_item.sub_title}</p>
																		</div>
																	</Link>
																</li>
															))}
														</Skeleton>
													</div>
												</ul>
											)}
										</>
									) : (
										<span
											className={`custom_menu_link  ${pathname === item.activeURL ? 'active' : ''}`}
											onClick={() => handleMenuItemClick(item.link)}
										>
											{item.title}
										</span>
									)}
								</li>
							))}
						</ul>
					</div>

					<div className="header_auth_button_wrapper">
						<button className="primary_button_border small_button" onClick={() => handleMenuItemClick('/login')}>
							Login
						</button>
						<button className="primary_button small_button" onClick={() => handleMenuItemClick('/registration')}>
							Free Sign Up
						</button>
					</div>

					<div className="responsive_nav_wrapper">
						<div
							className="nav_icon"
							onClick={() => {
								setNavfold(!navfold);
							}}
						>
							{!navfold ? <FaBars size={24} /> : <GiSplitCross size={24} />}
						</div>
						<div className={`${navfold ? 'no_scroll nav_menu_wrapper nav_menu_wrapper_fold ' : 'nav_menu_wrapper '}`}>
							<ul className="nav_menu">
								{navItem.map((item, index) => (
									<li className="nav_menu_item" key={index}>
										{item.link === '/features' ? (
											<span
												className={`custom_menu_link ${pathname === '/features' ? 'active' : ''}`}
												href={item.link}
												onClick={() => handleMenuItemClick(`/features/${sortedFeatures[0]?.slug}`)}
											>
												{item.title}
											</span>
										) : (
											<span
												className={`custom_menu_link ${pathname == item.link ? 'active' : ''}`}
												onClick={() => handleMenuItemClick(item.link)}
											>
												{item.title}
											</span>
										)}
									</li>
								))}

								<li className="nav_menu_item">
									<span
										onClick={(e) => {
											e.preventDefault();
											router.push('/login');
										}}
									>
										Login / Registration
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;

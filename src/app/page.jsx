import React from 'react';
import dynamic from 'next/dynamic';

// const CustomHead = dynamic(() => import('@/components/common/header/Header'));
const HeroSection = dynamic(() => import('@/components/pages/homepage/home/HeroSection'));
const SolutionSection = dynamic(() => import('@/components/pages/homepage/home/SolutionSection'));
const ApplicationSection = dynamic(() => import('@/components/pages/homepage/home/ApplicationSection'), {
	loading: () => {
		return '';
	},
	ssr: false,
});
const DeliveryProcess = dynamic(() => import('@/components/pages/homepage/home/DeliveryProcess'));
const Testimonials = dynamic(() => import('@/components/pages/homepage/home/Testimonials'));

const HomePage = () => {
	return (
		<>
			<div className="home-content">
				<HeroSection />
				<SolutionSection />
				<ApplicationSection />
				<DeliveryProcess />
				<Testimonials />
			</div>
		</>
	);
};

export default HomePage;

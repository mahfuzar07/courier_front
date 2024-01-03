import ApplicationSection from '@/components/pages/homepage/home/ApplicationSection';
import DeliveryProcess from '@/components/pages/homepage/home/DeliveryProcess';
import HeroSection from '@/components/pages/homepage/home/HeroSection';
import SolutionSection from '@/components/pages/homepage/home/SolutionSection';
import Testimonials from '@/components/pages/homepage/home/Testimonials';

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

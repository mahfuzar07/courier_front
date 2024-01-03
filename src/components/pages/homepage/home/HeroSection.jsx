import Image from 'next/image';
import heroBg from '@/public/assets/hero/hero-image.png';

function HeroSection() {
	return (
		<div className="hero_section_wrapper">
			<div className="container">
				<div className="hero-section-info">
					<div className="hero_info_area">
						<h5>Delivery Management Software</h5>

						<p>Best Delivery Management Software With Real-Time Tracking</p>

						<div className="hero_button_wrapper">
							<button className="primary_button">Request A Demo</button>
							<button className="primary_button_border">Watch video</button>
						</div>
					</div>

					<div className="hero_image_section">
						<Image quality={100} src={heroBg} alt="Fast Inventory" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;

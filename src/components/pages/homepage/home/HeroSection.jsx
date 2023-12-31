'use client';
import Image from "next/legacy/image";

function HeroSection() {
	// const [heroSectionData, setHeroSectionData] = useState();

	// const getHeroSectionData = async () => {
	// 	return await api.get(BaseApiUrl + apiUrl.publicHeroSection).then((response) => {
	// 		setHeroSectionData(response?.data);
	// 	});
	// };

	// useEffect(() => {
	// 	getHeroSectionData();
	// }, []);

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
						<div className="hero_image_wrapper">
							<Image src="/assets/hero/hero-image.png" alt="Fast Inventory" layout="fill" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;

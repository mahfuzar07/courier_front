import ContentTitle from '@/components/common/title/ContentTitle';
import React from 'react';
import Image from 'next/image';
import MissionImage from '@/public/assets/about/mission-image-1.png';

const AboutPage = () => {
	return (
		<div className="page_content_wrapper">
			<div className="page_top_title_section">
				<h1 className="page_top_title">
					Contact <strong>Us</strong>
				</h1>
				<p className="page_top_subtitle">We're always happy to help! You are welcome to message us at any time.</p>
			</div>
			<div className="container">
				<div className="page_content">
					<ContentTitle title="Who We" strong="Are" />
					<p className="page_content_para">
						Revolutionize your delivery operations with our cutting-edge delivery management software solutions. As a leading company in the industry,
						we specialize in providing comprehensive tools for optimizing your delivery workflows. Our software ensures real-time tracking, efficient
						route planning, and streamlined communication for your delivery personnel.
						<br />
						Our team of experts is dedicated to offering tailored solutions that align with your unique business requirements. We pride ourselves on
						delivering top-notch customer support to guarantee a seamless implementation process and ongoing assistance. Stay ahead of the competition
						by embracing the future of delivery management. Trust our software solutions to elevate your logistics game and empower your business for
						success in the digital age.
					</p>

					<div className="about_mission_section">
						<ContentTitle title="our" strong="mission" />
						<div className="about_mission_content">
							<p className="page_content_para">
								Our mission is to revolutionize the delivery management landscape by providing innovative and comprehensive software solutions. We are
								dedicated to empowering businesses of all sizes with cutting-edge tools that streamline their delivery operations, enhance efficiency,
								and boost overall productivity.
							</p>
							<div className="about_mission_image_wrapper">
								<div className="circle_effect"></div>
								<Image src={MissionImage} alt="about-image" height={400} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;

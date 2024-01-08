import ContentTitle from '@/components/common/title/ContentTitle';
import React from 'react';
import Image from 'next/image';
import ContactImage from '@/public/assets/contact/contact-image-1.png';

const ContactPage = () => {
	return (
		<div className="page_content_wrapper">
			<div className="page_top_title_section">
				<h1 className="page_top_title">
					Contact <strong>Us</strong>
				</h1>
			</div>
			<div className="container">
				<div className="page_content">
					<div className="contact_section_wrapper">
						<div className="contact_image_wrapper">
							<Image src={ContactImage} alt="contact-image" height={400} />
						</div>
						<div className="contact_form_wrapper"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;

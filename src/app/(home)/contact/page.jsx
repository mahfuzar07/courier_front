import ContentTitle from '@/components/common/title/ContentTitle';
import React from 'react';
import Image from 'next/image';
import ContactImage from '@/public/assets/contact/contact-image-1.png';
import ContactForm from '@/components/common/form/ContactForm';

const ContactPage = () => {
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
					<div className="contact_section_wrapper">
						<div className="contact_image_wrapper">
							<div className="image_circle">
								<div className="contact_image">
									<Image src={ContactImage} alt="contact-image" />
								</div>
							</div>
						</div>
						<div className="contact_form_wrapper">
							<ContactForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;

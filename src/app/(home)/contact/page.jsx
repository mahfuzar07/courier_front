import ContentTitle from '@/components/common/title/ContentTitle';
import Image from 'next/image';
import ContactImage from '@/public/assets/contact/contact-image-1.png';
import ContactForm from '@/components/common/form/ContactForm';

// image
import locationIcon from '@/public/assets/contact/icon/location.png';
import emailIcon from '@/public/assets/contact/icon/email.png';
import phoneIcon from '@/public/assets/contact/icon/phone.png';

const ContactPage = () => {
	const contactItems = [
		{
			icon: locationIcon,
			title: 'Mirpur DOHS, Dhaka Bangladesh',
		},
		{
			icon: emailIcon,
			title: 'contact@updatetechltd.com',
		},
		{
			icon: phoneIcon,
			title: '+000 111 234 567',
		},
	];
	return (
		<div className="page_content_wrapper">
			<div className="page_top_title_section">
				<h1 className="page_top_title">
					Contact <strong>Us</strong>
				</h1>
				<p className="page_top_subtitle">We&apos;re always happy to help! You are welcome to message us at any time.</p>
			</div>

			<div className="page_content">
				<div className="contact_section_wrapper">
					<div className="container">
						<div className="contact_section">
							<div className="contact_image_wrapper">
								<div className="image_circle">
									<div className="contact_image">
										<Image quality={100} src={ContactImage} alt="contact-image" />
									</div>
								</div>
							</div>
							<div className="contact_form_wrapper">
								<ContactForm />
							</div>
						</div>
					</div>
				</div>

				<div className="contact_address_section_wrapper">
					<ContentTitle title="feel free to" strong="contact us!" />
					<div className="container">
						<div className="contact_address_section">
							<div className="contact_address">
								<div className="address_top">
									<h1>Corporate Address</h1>
									<p>Here&apos;s how you can contact us, depending on your needs.</p>
								</div>
								<div className="address_item_wrapper">
									{contactItems?.map((item, index) => (
										<div key={index} className="address_item">
											<div className="item_icon">
												<Image quality={100} src={item.icon} alt="contact-icon" width={20} height={20} />
											</div>
											<p className="item_title">{item.title}</p>
										</div>
									))}
								</div>
							</div>
							<div className="live_contact_section">
								<div className="live_contact_card">
									<h1>Got Question?</h1>

									<Image quality={100} src="/assets/contact/whatsapp-gif.gif" alt="contact-icon" width={70} height={70} />

									<button className="live_contact_button">Message us on WhatsApp</button>
									<p>We are here to help you!</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;

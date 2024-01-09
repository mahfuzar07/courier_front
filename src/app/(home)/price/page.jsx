import ContentTitle from '@/components/common/title/ContentTitle';
import Image from 'next/image';
import ContactImage from '@/public/assets/contact/contact-image-1.png';
import ContactForm from '@/components/common/form/ContactForm';

// image
import locationIcon from '@/public/assets/contact/icon/location.png';
import emailIcon from '@/public/assets/contact/icon/email.png';
import phoneIcon from '@/public/assets/contact/icon/phone.png';

const PricingPage = () => {
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
					simple and flexible <strong>pricing</strong>
				</h1>
			</div>

			<div className="page_content">
				<div className="pricing_section_wrapper">price</div>
			</div>
		</div>
	);
};

export default PricingPage;

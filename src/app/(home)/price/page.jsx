import PriceContent from '@/components/pages/homepage/price/PriceContent';

const PricingPage = () => {
	return (
		<div className="page_content_wrapper">
			<div className="page_top_title_section">
				<h1 className="page_top_title">
					simple and flexible <strong>pricing</strong>
				</h1>
			</div>

			<div className="page_content">
				<PriceContent />
			</div>
		</div>
	);
};

export default PricingPage;

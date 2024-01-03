import Image from "next/image";

function DeliveryProcess() {
	const deliveryProcessItem = [
		{
			image: '/assets/process/process-1.png',
			title: 'Real-time tracking',
			description: 'Using real-time delivery tracking software has made managing last-mile deliveries simpler.',
		},
		{
			image: '/assets/process/process-2.png',
			title: 'Proof of Delivery',
			description: 'Using real-time delivery tracking software has made managing last-mile deliveries simpler.',
		},
		{
			image: '/assets/process/process-3.png',
			title: 'Real-time tracking',
			description: 'Using real-time delivery tracking software has made managing last-mile deliveries simpler.',
		},
	];

	return (
		<div className="delivery_process_section_wrapper">
			<h1 className="section_title">
				All in one proof for <br /> final mile delivery solution
			</h1>
			<div className="container">
				<div className="delivery_process_section">
					<div className="delivery_process_item_wrapper">
						{deliveryProcessItem?.map((item, index) => (
							<div key={index} className="item_card">
								<div className="card_image_wrapper">
									<Image src={item.image} alt="solution" width={90} height={90} />
								</div>
								<h1 className="card_title">{item.title}</h1>
								<p className="card_description">{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default DeliveryProcess;

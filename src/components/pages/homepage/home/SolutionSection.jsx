import Image from "next/legacy/image";

function SolutionSection() {
	const solutionItem = [
		{
			image: '/assets/solution/icon/food.png',
			title: 'Food',
			description:
				'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
		},
		{
			image: '/assets/solution/icon/grocery.png',
			title: 'grocery',
			description:
				'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
		},
		{
			image: '/assets/solution/icon/delivery.png',
			title: 'courier',
			description:
				'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
		},
		{
			image: '/assets/solution/icon/logistics.png',
			title: 'logistics',
			description:
				'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
		},
	];

	return (
		<div className="solution_section_wrapper">
			<h1 className="section_title">Solution for every delivery</h1>
			<div className="solution_section">
				<div className="container">
					<div className="solution_item_wrapper">
						{solutionItem?.map((item, index) => (
							<div key={index} className="item_card">
								<div className="card_image_wrapper">
									<Image src={item.image} alt="solution" layout="fill" />
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

export default SolutionSection;

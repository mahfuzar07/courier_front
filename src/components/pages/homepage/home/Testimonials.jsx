'use client';
import React, { useEffect, useState } from 'react';
import Image from "next/legacy/image";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Testimonials() {
	// const [testimonialData, setTestimonialData] = useState();

	// const getTestimonialData = async () => {
	// 	return await api
	// 		.get(BaseApiUrl + apiUrl.publicTestimonial)
	// 		.then((res) => {
	// 			setTestimonialData(res.data);
	// 		})
	// 		.catch((err) => console.log(err));
	// };

	// useEffect(() => {
	// 	getTestimonialData();
	// }, []);

	const slideItem = [
		{
			image: '/assets/testimonials/client-1.png',
			clientName: 'Johan Smith',
			clientOccupation: 'Courier Logistic Supply',
			clientFeedback:
				'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
		},
		{
			image: '/assets/testimonials/client-2.png',
			clientName: 'Sujana Smith',
			clientOccupation: 'Courier Logistic Supply',
			clientFeedback:
				'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
		},
		{
			image: '/assets/testimonials/client-1.png',
			clientName: 'Johan Smith',
			clientOccupation: 'Food Production ',
			clientFeedback:
				'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
		},
		{
			image: '/assets/testimonials/client-2.png',
			clientName: 'Sujana Smith',
			clientOccupation: 'Courier Logistic Supply',
			clientFeedback:
				'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
		},
		{
			image: '/assets/testimonials/client-1.png',
			clientName: 'Johan Smith',
			clientOccupation: 'Courier Logistic Supply',
			clientFeedback:
				'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
		},
	];

	return (
		<div className="testimonials_section_wrapper">
			<h1 className="section_title">What Our Client Say</h1>
			<div className="container">
				<div className="testimonials_slider_wrapper">
					<Swiper
						slidesPerView={3}
						// slidesPerGroup={2}
						spaceBetween={40}
						speed={1000}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination, Navigation]}
						breakpoints={{
							320: {
								slidesPerView: 1,
								slidesPerGroup: 1,
							},
							425: {
								slidesPerView: 1,
								slidesPerGroup: 1,
							},
							768: {
								slidesPerView: 2,
								slidesPerGroup: 1,
							},
							1024: {
								slidesPerView: 3,
							},
						}}
					>
						{slideItem.map((item, index) => (
							<>
								<SwiperSlide key={index}>
									<div className="slider_item_card_wrapper">
										<div className="slide_image_wrapper">
											<Image src={item.image} alt="Picturer" width={120} height={120} />
										</div>

										<div className="slide_card_body">
											<h5 className="slide_card_title">{item.clientName}</h5>
											<p className="slide_card_subtitle">{item.clientOccupation}</p>
											<p className="slide_card_dec">{item.clientFeedback}</p>
										</div>
									</div>
								</SwiperSlide>
							</>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
}

export default Testimonials;

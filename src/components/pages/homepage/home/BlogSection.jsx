import Image from 'next/image';
import Link from 'next/link';

import blogImage_1 from '@/public/assets/blog/blog-1.png';
import blogImage_2 from '@/public/assets/blog/blog-2.png';
import blogImage_3 from '@/public/assets/blog/blog-3.png';

function BlogSection() {
	const blogItem = [
		{
			title: 'Revolutionizing Deliveries: Unleashing the Power of Delivery Management',
			thumbnail: blogImage_1,
			slug: 'Revolutionizing Deliveries',
			summary:
				'It is a long established fact that a reader will be  by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
		},
		{
			title: 'Retail Resonance: Navigating Success in the Market Trends',
			thumbnail: blogImage_2,
			slug: 'Retail Resonance',
			summary:
				'It is a long established fact that a reader will be  by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
		},
		{
			title: 'Dispatch Dynamics: Unravelling the Secrets of Courier & Parcel Services',
			thumbnail: blogImage_3,
			slug: 'Dispatch Dynamics',
			summary:
				'It is a long established fact that a reader will be  by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
		},
	];
	return (
		<div className="blog_section_wrapper">
			<h1 className="section_title">Get Our Latest Blogs </h1>
			<div className="container">
				<div className="blog_section">
					<div className="home_blog_card_item_wrapper">
						{blogItem &&
							blogItem?.map((item) => (
								<div className="home_blog_card" key={item?.id}>
									<div className="home_blog_card_image_wrapper">
										<Image placeholder="blur" quality={100} alt="image" src={item.thumbnail} />
									</div>
									<div className="home_blog_info">
										<h5 className="home_blog_info_title">
											<Link href={('/blog/[slug]', `/blog/${item.slug}`)}>{item.title}</Link>
										</h5>

										<p className="home_blog_info_des">{item.summary}</p>

										<div className="read_button_wrapper">
											<p className="read_button">
												<Link href={('/blog/[slug]', `/blog/${item.slug}`)}> Read More ...</Link>
											</p>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default BlogSection;

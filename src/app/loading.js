import Image from 'next/image';
import loadingGIF from '@/public/assets/loading-1.gif';
const LoadingPage = () => {
	return (
		<div className="loading_page_wrapper">
			<div className="loading_image">
				<Image quality={100} src={loadingGIF} alt="loading" />
			</div>
		</div>
	);
};

export default LoadingPage;

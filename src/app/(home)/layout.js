import { metadatas } from '@/data/metadatas';
import Header from '@/components/common/header/Header';
import Footer from '@/components/common/footer/Footer';

// Meta Data:
export const metadata = { ...metadatas };

export default function HomeLayout({ children }) {
	return (
		<div>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}

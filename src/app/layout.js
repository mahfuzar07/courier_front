import '../styles/style.scss';
import { metadatas } from '@/data/metadatas';
import { Providers } from '@/redux/providers';
import RQProvider from '@/react-query/RQProvider';
import Header from '@/components/common/header/Header';
import Footer from '@/components/common/footer/Footer';

// Meta Data:
export const metadata = { ...metadatas };

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body suppressHydrationWarning={false}>
				<Providers>
					<RQProvider>
						<Header />
						<div>{children}</div>
						<Footer />
					</RQProvider>
				</Providers>
			</body>
		</html>
	);
}

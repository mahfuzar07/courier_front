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
		<Providers>
			<html lang="en">
				<body suppressHydrationWarning={true}>
					<RQProvider>
						<Header />
						<main>{children}</main>
						<Footer />
					</RQProvider>
				</body>
			</html>
		</Providers>
	);
}

import '../styles/style.scss';
import { metadatas } from '@/data/metadatas';
import { Providers } from '@/redux/providers';
import RQProvider from '@/react-query/RQProvider';
import dynamic from 'next/dynamic';
// Client Components:
const Header = dynamic(() => import('@/components/common/header/Header'), { ssr: true });
const Footer = dynamic(() => import('@/components/common/footer/Footer'), { ssr: true });
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

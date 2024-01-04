import '../styles/style.scss';
import { metadatas } from '@/data/metadatas';
import { Providers } from '@/redux/providers';
import RQProvider from '@/react-query/RQProvider';

// Meta Data:
export const metadata = { ...metadatas };

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body suppressHydrationWarning={true}>
				<Providers>
					<RQProvider>{children}</RQProvider>
				</Providers>
			</body>
		</html>
	);
}

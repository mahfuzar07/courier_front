export default function AuthLayout({ children }) {
	return (
		<html lang="en">
			<body suppressHydrationWarning={false}>
				<div>{children}</div>
			</body>
		</html>
	);
}

'use client';
// Meta Data:
import Link from 'next/link';
import Image from 'next/legacy/image';
import loginBg from '@/public/assets/auth/login-bg.png';
import signUpBg from '@/public/assets/auth/signup-bg.png';
import { usePathname } from 'next/navigation';

export default function AuthLayout({ children }) {
	const path = usePathname();
	return (
		<div className="auth_page_wrapper">
			<div className="container">
				<div className="auth_form_content_wrapper">
					<div className="auth_image_wrapper">
						<Link href="/" passHref legacyBehavior>
							<Image
								className="auth_image"
								layout="fill"
								src={path === '/login' ? loginBg : path === '/registration' ? signUpBg : ''}
								alt="Picturer"
							/>
						</Link>
					</div>

					<div className="auth_form_wrapper">{children}</div>
				</div>
			</div>
		</div>
	);
}

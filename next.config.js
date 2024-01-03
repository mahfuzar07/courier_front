const path = require('path');
/** @type {import('next').NextConfig} */

const nextConfig = {
	productionBrowserSourceMaps: true,
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '3002',
				pathname: '/assets/**',
			},
		],
	},
	reactStrictMode: false,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
};

module.exports = nextConfig;

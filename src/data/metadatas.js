import { siteTitle, siteTagLine, metaDesc } from '@/config/config';

const title = siteTitle ? siteTitle : '';
const tag = siteTagLine ? siteTagLine : '';

export const metadatas = {
	title: {
		default: title + ' | ' + tag,
		template: '%s' + ' | ' + title,
	},
	description: metaDesc,
};

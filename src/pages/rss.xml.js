import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts'

export async function GET(context) {
	const psychology = await getCollection('psychology')
	const programming = await getCollection('programming')
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: [...psychology, ...programming].map((post) => ({
			...post.data,
			link: `/${post.collection}/${post.slug}`,
		})),
	})
}

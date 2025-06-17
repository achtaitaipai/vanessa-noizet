import type { GetStaticPaths } from 'astro'
import { getCollection, type CollectionKey } from 'astro:content'

export function getStaticPathsFromCollection<T extends CollectionKey>(collection: T) {
	return (async () => {
		const entries = await getCollection(collection)
		return entries.map((post) => ({ params: { slug: post.id }, props: post }))
	}) satisfies GetStaticPaths
}

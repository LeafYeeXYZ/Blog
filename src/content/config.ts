import { defineCollection, z } from 'astro:content'

const psychology = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
	}),
})
const programming = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
	}),
})

export const collections = { psychology, programming }

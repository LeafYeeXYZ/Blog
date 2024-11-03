import { defineCollection, z } from 'astro:content'

const psychology = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		headings: z.array(z.object({ 
			depth: z.number(),
			slug: z.string(),
			text: z.string(),
		})).optional(),
	}),
})
const programming = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		headings: z.array(z.object({ 
			depth: z.number(),
			slug: z.string(),
			text: z.string(),
		})).optional(),
	}),
})

export const collections = { psychology, programming }

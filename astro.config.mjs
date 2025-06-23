// @ts-check
import { defineConfig } from 'astro/config'
import UnoCSS from '@unocss/astro'

import typesafeRoutes from 'astro-typesafe-routes'

// https://astro.build/config
export default defineConfig({
	base: 'vanessa-noizet',
	integrations: [UnoCSS(), typesafeRoutes()],
})

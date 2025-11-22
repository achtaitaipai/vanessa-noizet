import { defineConfig } from 'unocss'

export default defineConfig({
	rules: [
		// Font size utilities: fs--2, fs--1, fs-0, fs-1, etc.
		[/^fs-(-?\d+)$/, ([, num]) => ({ 'font-size': `var(--fs-${num})` })],

		// Text color utilities: text-base, text-strong, text-fade, etc.
		['text-base', { color: 'var(--clr-text)' }],
		['text-strong', { color: 'var(--clr-text-strong)' }],
		['text-fade', { color: 'var(--clr-text-fade)' }],
		['text-disabled', { color: 'var(--clr-text-disabled)' }],
		['text-accent', { color: 'var(--clr-accent)' }],
		['text-accent-fade', { color: 'var(--clr-accent-fade)' }],
		['text-inherit', { color: 'inherit' }],
		['text-current', { color: 'currentColor' }],

		// Margin utilities using spacing tokens
		[
			/^m-(.+)$/,
			([, size]) => ({
				margin: `var(--space-${size})`,
			}),
		],
		[
			/^mx-(.+)$/,
			([, size]) => ({
				'margin-left': `var(--space-${size})`,
				'margin-right': `var(--space-${size})`,
			}),
		],
		[
			/^my-(.+)$/,
			([, size]) => ({
				'margin-top': `var(--space-${size})`,
				'margin-bottom': `var(--space-${size})`,
			}),
		],
		[
			/^mt-(.+)$/,
			([, size]) => ({
				'margin-top': `var(--space-${size})`,
			}),
		],
		[
			/^mr-(.+)$/,
			([, size]) => ({
				'margin-right': `var(--space-${size})`,
			}),
		],
		[
			/^mb-(.+)$/,
			([, size]) => ({
				'margin-bottom': `var(--space-${size})`,
			}),
		],
		[
			/^ml-(.+)$/,
			([, size]) => ({
				'margin-left': `var(--space-${size})`,
			}),
		],

		// Padding utilities using spacing tokens
		[
			/^p-(.+)$/,
			([, size]) => ({
				padding: `var(--space-${size})`,
			}),
		],
		[
			/^px-(.+)$/,
			([, size]) => ({
				'padding-left': `var(--space-${size})`,
				'padding-right': `var(--space-${size})`,
			}),
		],
		[
			/^py-(.+)$/,
			([, size]) => ({
				'padding-top': `var(--space-${size})`,
				'padding-bottom': `var(--space-${size})`,
			}),
		],
		[
			/^pt-(.+)$/,
			([, size]) => ({
				'padding-top': `var(--space-${size})`,
			}),
		],
		[
			/^pr-(.+)$/,
			([, size]) => ({
				'padding-right': `var(--space-${size})`,
			}),
		],
		[
			/^pb-(.+)$/,
			([, size]) => ({
				'padding-bottom': `var(--space-${size})`,
			}),
		],
		[
			/^pl-(.+)$/,
			([, size]) => ({
				'padding-left': `var(--space-${size})`,
			}),
		],

		// Gap utilities using spacing tokens
		[
			/^gap-(.+)$/,
			([, size]) => ({
				gap: `var(--space-${size})`,
			}),
		],

		// Flow utilities (preserve existing functionality)
		[
			/^flow-(.+)$/,
			([, size]) => ({
				'--flow-space': `var(--space-${size})`,
			}),
		],

		// Border utilities with dynamic colors
		[/^border-top-(.+)$/, ([, color]) => ({ 'border-top': `1px solid var(--clr-${color})` })],
		[/^border-right-(.+)$/, ([, color]) => ({ 'border-right': `1px solid var(--clr-${color})` })],
		[/^border-bottom-(.+)$/, ([, color]) => ({ 'border-bottom': `1px solid var(--clr-${color})` })],
		[/^border-left-(.+)$/, ([, color]) => ({ 'border-left': `1px solid var(--clr-${color})` })],
		[/^border-(.+)$/, ([, color]) => ({ border: `1px solid var(--clr-${color})` })],

		// Border shortcuts for most common cases
		['border', { border: '1px solid var(--clr-border)' }],
		['border-none', { border: 'none' }],
	],

	presets: [],

	// Configure which files to scan for utility classes
	content: {
		filesystem: ['**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}'],
	},
})


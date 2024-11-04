/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'instrument': ['"Instrument Serif"', 'serif'],
				'sans': ['Raleway', 'sans-serif'],
			},
			colors: {
				desk: '#fefefe',
				ink: 'rgb(var(--color-ink) / <alpha-value>)',
				inkLight: 'rgb(var(--color-ink-light) / <alpha-value>)',
				inkLighter: 'rgb(var(--color-ink-lighter) / <alpha-value>)',
				inkDark: 'rgb(var(--color-ink-dark) / <alpha-value>)',
				paper: 'rgb(var(--color-paper) / <alpha-value>)',
				carbon: '#2A261E',
				brand: '#ff5e2b',
				brandDark: '#c93d10',
			},
		},
	},
	plugins: [],
}

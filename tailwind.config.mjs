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
				ink: '#554E3F',
				inkLight: '#7C7462',
				inkLighter: '#BCAD8F',
				inkDark: '#2A261E',
				paper: '#FFFFFF'
			},
		},
	},
	plugins: [],
}

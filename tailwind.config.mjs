/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				light: {
					base: '#F9F7F5',
					text: '#33323F',
					paper: '#ffffff',
					border: '#ffffff',
				},
				dark: {
					base: '#33323F',
					text: '#F9F7F5',
					paper: '#33323F',
					border: '#33323F',
				},
			},
		},
	},
	plugins: [],
}

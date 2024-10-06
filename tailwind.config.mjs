/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"orange-manage": "hsl(12, 88%, 59%)",
			}
		},
	},
	plugins: [],
}

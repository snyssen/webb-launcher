/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}',
	],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Octarine Light', ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [
	],
}

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
			},
			backgroundSize: {
				'150%': '150%',
				'200%': '200%',
				'250%': '250%',
				'300%': '300%',
				'350%': '350%',
				'400%': '400%',
			},
			keyframes: {
				'gradient-slide-left-right': {
					'0%': { 'background-position': '0% 50%' },
					'100%': { 'background-position': '100% 50%' }
				}
			},
			animation: {
				'gradient-pulse-once': 'gradient-slide-left-right 1.5s ease-out forwards'
			},
			screens: {
				// Support for large screens (2K and 4K)
				'3xl': '1824px',
				'4xl': '2248px'
			}
		},
	},
	plugins: [
	],
}

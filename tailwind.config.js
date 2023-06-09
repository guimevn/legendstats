/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',

	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

	content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

	darkMode: false,

	theme: {
		extend: {},
	},

	variants: {
		extend: {}
	},

	plugins: [],
}


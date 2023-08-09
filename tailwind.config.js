/** @type {import('tailwindcss').Config} */
module.exports = {
	// 테일윈도 사용하지 않기
	corePlugins: {
		preflight: false,
	},
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{html,js,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	// prefix: 't',
	content: [
		'./config/*.json',
		'./layout/*.liquid',
		'./assets/*.liquid',
		'./sections/*.liquid',
		'./snippets/*.liquid',
		'./templates/*.liquid',
		'./templates/*.json',
		'./templates/customers/*.liquid',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};

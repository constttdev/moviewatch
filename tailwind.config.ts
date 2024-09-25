import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				text: '#e1e9f5',
				background: '#202733',
				primary: '#8da8d8',
				secondary: '#556887',
				accent: '#417ee1',
				bar: '#4D6B88'
			},
			fontFamily: {
				inter: 'Inter'
			}
		}
	},

	plugins: []
} as Config;

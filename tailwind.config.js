/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		fontFamily: {
			sans: ["Kumbh Sans", "sans-serif"],
		},
		extend: {
			colors: {
				cyan: "hsl(185, 75%, 39%)",
				gray: "hsl(0, 0%, 59%)",
				blue: {
					dark: "hsl(229, 23%, 23%)",
					gray: "hsl(227, 10%, 46%)",
				},
			},
		},
	},
	plugins: [],
};

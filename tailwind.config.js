/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: "",
				spaceGrotesk: "",
			},
			colors: {
				orange: "#E07B67",
				gray: "#AFABB6",
				dark: {
					10: "#121214",
					20: "#17171A",
					30: "#202024",
					40: "#252529",
				},
			},
		},
	},
	plugins: [],
};

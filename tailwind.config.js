/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "16px",
					md: "80px",
				},
			},
			colors: {
				custom: {
					orange: {
						light: "#E69840",
						basic: "#D8632C",
					},
					black: "#121212",
					offWhite: "#FDF9F6",
					gray: "#9F9F9F",
				},
			},

			fontFamily: {
				raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
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
					lg: "120px",
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
				},
			},

			fontFamily: {
				raleway: ["Raleway", "sans-serif"],
			},
		},
	},
	plugins: [],
};

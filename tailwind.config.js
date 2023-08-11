/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			height: {
				150: "37.5rem",
				192: "48rem",
			},
			colors: {
				newPurple: "#C6A4CF",
				charcoalBlack: "#212121",
				iqiyi: "rgb(28, 199, 73)",
				iqbg: "rgb(17, 19, 25)",
			},
			fontFamily: {
				ubuntu: ["Ubuntu", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
				nasa: ["nasa", "sans-serif"],
				sf: ["SF Pro", "sans-serif"],
			},
			boxShadow: {
				innerXL: "inset 30px 30px 30px 30px rgb(255 255 255 / 0.05)",
			},
		},
	},
	plugins: [],
};

// @ts-check
import typography from "@tailwindcss/typography";
import colors from "tailwindcss/colors";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ['"Mona Sans"', "sans-serif"],
		},
		extend: {
			colors: {
				primary: colors.slate,
			},
		},
	},
	darkMode: "selector",
	plugins: [typography, animate],
};

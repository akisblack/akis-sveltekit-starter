import { defineConfig } from "windicss/helpers";

export default defineConfig({
	extract: {
		include: ["./src/**/*.{html,js,svelte,ts}"]
	},

	theme: {
		fontFamily: {
			primary: ["sans-serif"]
		},
		extend: {
			margin: {
				"0-auto": "0 auto"
			},
			colors: {
				primary: "#141414",
				secondary: "#111111",
				tertiary: "#0c0c0c",
				accent: {
					DEFAULT: "#3B82F6",
					secondary: "#6EE7B7"
				},
				greyish: "#c8c8c8",
				transparent: "transparent",
				current: "currentColor"
			}
		}
	},

	plugins: [
		require("windicss/plugin/aspect-ratio"),
		require("windicss/plugin/forms"),
		require("windicss/plugin/filters"),
		require("windicss/plugin/line-clamp"),
		require("windicss/plugin/scroll-snap"),
		require("windicss/plugin/typography"),
		require("@windicss/plugin-animations"),
		require("@windicss/plugin-scrollbar")
	]
});

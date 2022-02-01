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
			boxShadow: {
				custom: "0 4px 4px rgba(0, 0, 0, 0.16)"
			},
			margin: {
				"0-auto": "0 auto"
			},
			colors: {
				bg: {
					primary: "#141414",
					secondary: "#111111",
					alt: "#0c0c0c"
				},
				accent: {
					primary: "#3B82F6",
					secondary: "#6EE7B7"
				},
				greyish: "#c8c8c8",
				transparent: "transparent",
				current: "currentColor"
			},
			keyframes: {
				fade: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" }
				}
			},
			animation: {
				fade: "fade .7s"
			}
		}
	},

	plugins: [
		require("windicss/plugin/aspect-ratio"),
		require("windicss/plugin/forms"),
		require("windicss/plugin/filters"),
		require("windicss/plugin/line-clamp"),
		require("windicss/plugin/scroll-snap"),
		require("windicss/plugin/typography")
	]
});

import {
	defineConfig,
	presetIcons,
	presetTypography,
	transformerVariantGroup,
	transformerDirectives,
	presetWind
} from "unocss";

import { extractorSvelte } from "unocss";

import { presetBetterNestedColors } from "unocss-preset-better-nested-colors";

export default defineConfig({
	extractors: [extractorSvelte],

	presets: [
		presetIcons(),
		presetTypography(),
		presetWind({
			dark: "class"
		}),
		presetBetterNestedColors()
	],

	transformers: [transformerVariantGroup(), transformerDirectives()],

	theme: {
		fontFamily: {
			primary: ["sans-serif"]
		},
		margin: {
			"0-auto": "0 auto"
		},
		colors: {
			primary: {
				DEFAULT: "#dddddd",
				":dark": "#141414"
			},
			secondary: {
				DEFAULT: "#f9f3f3",
				":dark": "#111111"
			},
			tertiary: {
				DEFAULT: "#939393",
				":dark": "#0c0c0c"
			},
			greyish: {
				DEFAULT: "#444444",
				":dark": "#c8c8c8"
			},
			accent: {
				DEFAULT: "#57cc99",
				":dark": "#80ed99"
			},
			transparent: "transparent",
			current: "currentColor"
		}
	}
});

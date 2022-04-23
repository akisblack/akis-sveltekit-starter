import {
	defineConfig,
	presetIcons,
	presetTypography,
	transformerVariantGroup,
	transformerDirectives,
	presetWind
} from "unocss";

import { extractorSvelte } from "unocss";

export default defineConfig({
	extractors: [extractorSvelte],

	presets: [presetIcons(), presetTypography(), presetWind()],

	transformers: [transformerVariantGroup(), transformerDirectives()],

	theme: {
		fontFamily: {
			primary: ["sans-serif"]
		},
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
});

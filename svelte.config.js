import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import unoCSS from "unocss/vite";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: [".svelte", ...mdsvexConfig.extensions],

	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	],

	kit: {
		adapter: adapter(),

		prerender: {
			default: true
		},

		files: {
			assets: "./src/assets"
		},

		vite: {
			plugins: [unoCSS()],

			optimizeDeps: {
				exclude: ["os", "url"]
			}
		}
	}
};

export default config;

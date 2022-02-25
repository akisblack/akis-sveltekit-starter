import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import windiCSS from "vite-plugin-windicss";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],

	kit: {
		adapter: adapter(),
		files: {
			assets: "./src/assets"
		},
		vite: {
			plugins: [
				windiCSS()
			]
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	]
};

export default config;

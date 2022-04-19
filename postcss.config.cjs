const config = {
	parser: "postcss-scss",

	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		require("postcss-nested"),
		require("postcss-grid-kiss"),
		require("postcss-extend"),
		//require("cssnano")({
		//    preset: "default"
		//}),
		//But others, like autoprefixer, need to run after,
		require("autoprefixer")
	]
};

module.exports = config;

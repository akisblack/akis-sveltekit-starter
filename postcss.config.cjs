const config = {
	parser: "postcss-scss",

	plugins: [
		require("postcss-nested"),
		require("postcss-grid-kiss"),
		require("postcss-extend"),
		//require("cssnano")({
		//    preset: "default"
		//}),
		require("autoprefixer")
	]
};

module.exports = config;

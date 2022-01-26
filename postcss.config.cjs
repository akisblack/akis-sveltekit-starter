const config = {
	parser: "postcss-scss",

	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		require("postcss-nested-import"),
		require("postcss-nested"),
		require("postcss-grid-kiss"),
		require("postcss-extend"),
		require("postcss-each"),
		require("postcss-simple-vars"),
		require("postcss-short"),
		require("tailwindcss"),
		//But others, like autoprefixer, need to run after,
		require("autoprefixer")
	]
};

module.exports = config;

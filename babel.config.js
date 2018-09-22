module.exports = {
	presets: ["@babel/preset-env", "@babel/preset-react"],
	plugins: [
		"transform-class-properties",
		"@babel/plugin-syntax-object-rest-spread",
		"css-modules-transform"
	]
};

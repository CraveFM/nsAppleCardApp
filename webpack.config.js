const webpack = require("@nativescript/webpack");

module.exports = (env) => {
	webpack.init(env);

	// Learn how to customize:
	// https://docs.nativescript.org/webpack

	// Copy all assets files to the build directory
	webpack.Utils.addCopyRule('assets/**')
	// Copy all fonts files to the build directory
	webpack.Utils.addCopyRule('fonts/**')

	return webpack.resolveConfig();
};

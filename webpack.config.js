const path = require("path");
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: "./src/restserver.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            }
        ]
    },
    /* plugins: [
		new NodePolyfillPlugin()
	], */
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
    },
    externalsPresets: {
        node: true
    },
    externals: [
        nodeExternals({
            allowlist: [
                "express"
            ]
        })
    ],
}
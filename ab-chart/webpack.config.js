const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "./"),
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    library: "ab-chart",
    libraryTarget: "commonjs-module"
  },
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  externals: {
    "styled-components": "styled-components"
  },
  devtool: "source-maps",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist")
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
      Chart: path.resolve(__dirname, "src/Chart")
    }
  }
};

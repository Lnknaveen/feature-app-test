const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mode = "development";
const moduleRules = {
  rules: [
    {
      test: /\.tsx$/,
      use: "ts-loader"
    }
  ]
};
const resolve = {
  extensions: [".ts", ".tsx", ".js", ".jsx"]
};

module.exports = [
  {
    entry: "./src/hub/hub",
    mode,
    module: moduleRules,
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/hub/index.html"
      })
    ],
    resolve,
    output: {
      filename: "hub.js",
      path: path.resolve(__dirname, "./build")
    }
  },
  {
    entry: "./src/app/react",
    mode,
    module: moduleRules,
    externals: {
      react: "react"
    },
    resolve,
    output: {
      filename: "react.umd.js",
      libraryTarget: "umd",
      path: path.resolve(__dirname, "./build")
    }
  }
];

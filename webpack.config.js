const path = require("path");
const webpack = require("webpack");

const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'development';

const plugins = [
  new webpack.DefinePlugin({
    'process.env':{
      'NODE_ENV': JSON.stringify(NODE_ENV)
    }
  })
];

if (NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.optimize.UglifyJsPlugin({ 
    minimize: true, 
    sourceMap: true, 
    compress: {
      warnings: false
    } 
  }));
}

module.exports = {
  entry: [ 
    "./public/scripts/index.ts"
  ],
  output: {
    filename: "./public/scripts/bundle.min.js",
    sourceMapFilename: "./public/scripts/bundle.js.map"
  },
  plugins: plugins,
  devtool: "source-map",
  resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
  },
  module: {
      loaders: [
          { test: /\.ts?$/, loader: "ts-loader" }
      ],
      preLoaders: [
          { test: /\.js$/, loader: "source-map-loader" }
      ]
  }
};
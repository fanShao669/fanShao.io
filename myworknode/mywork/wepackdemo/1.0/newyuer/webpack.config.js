var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var publicPath = 'http://localhost:3000/dist';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: ['./client/js/index.js','./client/css/index.css',hotMiddlewareScript]
  },
  output: {
    filename: './[name].js',
    path: path.resolve('./public/dist'),
    publicPath: publicPath
  },
  module: {
    loaders: [{
        test: /\.(png|jpg)$/,
        loader: 'url?context=client&name=[path][name].[ext]'
      },
      {
        test: /\.scss$/,
        loader: 'style!css?sourceMap!resolve-url!sass?sourceMap'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }]
  },
};


if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new ExtractTextPlugin('./[name].css', {
                allChunks: true
            }),
            new webpack.optimize.OccurenceOrderPlugin()
        ],
        module.exports.devtool = false
} else {
    module.exports.plugins = [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"development"'
                }
            }),
            new ExtractTextPlugin('./[name].css', {
                allChunks: true
            }),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ],
        module.exports.devtool = '#eval-source-map'
}
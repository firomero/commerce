const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
	entry: {
		'app': './src/app.module.js',
		'vendor': './src/vendor.module.js'
	},
	devtool: 'source-map',
	output: {
		filename: 'libs/[name].bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: ['ng-annotate-loader', 'babel-loader']
			},
			{
				test: /\.(scss)$/,
				use: ExtractTextWebpackPlugin.extract({
					use: [
							{
								loader: "css-loader",
								options: {
									minimize: true
								}
							},
							{
								loader: "sass-loader"
							}
					]
				})
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				loader: 'url-loader?limit=10000',
				options: {
					name: 'images/[name].[ext]'
				}
			},
			{
				test: /\.(eot|ttf|svg|woff|woff2)$/,
				loader: 'file-loader',
				options: {
					name: 'fonts/[name].[ext]'
				}
			},
			{ test: /\.html$/, loader: 'html-loader' },
			{ test: /\.jade/, loader: 'jade-loader' }
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			comments: false,
			sourceMap: true,
		}), // for mifiying js
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'libs/[name].bundle.js'
		}),
		new CleanWebpackPlugin('build'),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
			jquery: 'jquery'
		}),
		new ExtractTextWebpackPlugin('styles.css'),
		new OptimizeCssAssetsWebpackPlugin()
		,
		new CopyWebpackPlugin([{
			from: 'src/assets/images/carousel/*.*',
			to: 'images/carousel',
			flatten: true
		},{
			from: 'src/assets/images/*.png',
			to: 'images/',
			flatten: true
		},{
			from: 'src/assets/images/*.gif',
			to: 'images/',
			flatten: true
		},{
			from: 'src/assets/video/*.mp4',
			to: 'video/',
			flatten: true
		},{
			from: 'src/assets/fonts/*.eot',
			to: 'fonts/',
			flatten: true
		},{
			from: 'src/assets/fonts/*.svg',
			to: 'fonts/',
			flatten: true
		},{
			from: 'src/assets/fonts/*.woff',
			to: 'fonts/',
			flatten: true
		},{
			from: 'src/assets/fonts/*.woff2',
			to: 'fonts/',
			flatten: true
		}])
	],
	devServer: {
		port: 3000,
		contentBase: './src/',
		historyApiFallback: true
	}
};

module.exports = config;

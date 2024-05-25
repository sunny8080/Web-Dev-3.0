const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// entry: './src/app.ts',
	entry: path.resolve(__dirname, 'src/app.ts'),
	output: {
		filename: 'bundle.[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		// publicPath: '/dist/' // default = ''
	},
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		static: {
			directory: path.resolve(__dirname + 'dist')
		},
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(scss|css)$/i,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: 'asset',
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Project Manager',
			filename: 'index.html',
			template: './index.html'
		})
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '...']
	}
}

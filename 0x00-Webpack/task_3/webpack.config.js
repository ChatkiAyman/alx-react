const path = require('path');

module.exports = {
  entry: {
    header: {
      import: './modules/header/header.js',
      dependOn: 'shared',
    },
    footer: {
      import: './modules/footer/footer.js',
      dependOn: 'shared',
    },
    shared: 'jquery',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    static: path.join(__dirname, './public'),
    open: true,
    port: 8564,
  },
  performance: {
    maxAssetSize: 1000000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      temmplate:"./public/index.html",
			filename: './index.html',
		}),
		new CleanWebpackPlugin(),
  ],
};
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // Use the single entry point
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    library: 'App', // Expose the functions globally for the HTML to call
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'development',
};
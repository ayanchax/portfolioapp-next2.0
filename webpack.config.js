const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  mode: 'production', // Change to 'development' for dev builds
  entry: './src/index.js', // Your main entry file
  output: {
    path: path.resolve(__dirname, 'build'), // Output directory
    filename: 'bundle.js', // Output file
    clean: true, // Cleans old build files
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Handles CSS files
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource', // Correct type for images
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Your HTML file
       
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/css', to: 'css' },
        { from: 'public/blob', to: 'blob' },
        { from: 'public/images', to: 'images' },
        { from: 'public/js', to: 'js' },
        { from: 'public', to: '.', globOptions: { ignore: ['**/index.html'] } }
      ],
    }),
    new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.(js|css|html|svg)$/,
      }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'public'), // Serves static files
    compress: true,
    port: 3000, // Development server port
  },
};

const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     app: './src/script/index.js',
   },
   output: {
    filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   devtool: 'inline-source-map',
   plugins: [
     new HtmlWebpackPlugin({
      template: "src/index.html",
     }),
   ],
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
     {
       test: /\.(woff|woff2|eot|ttf|otf)$/i,
       type: 'asset/resource',
     },
    ],
  },
   devtool: 'source-map',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
 };
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');


     module.exports = {
       entry: {
         app: './src/index.js',
           },
         devtool: 'inline-source-map',


         devServer: {
             static:'./dist',
             hot: true,
             // overlay: true,
             host: 'localhost'
         },
   plugins: [
         new HtmlWebpackPlugin({
               title: 'Production',
             template: "./src/index.pug",
         }),
         new ESLintPlugin()
   ],
         output: {
             filename: "main.js"
         },
         module: {
             rules: [
                 {
                     test: /\.pug$/,
                     loader: 'pug-loader',
                     options: {
                         pretty: true
                     }
                 },
                 // {
                 //     test: /\.js$/,
                 //     exclude: /node_modules/,
                 //     loader: 'eslint-loader',
                 //     options: {
                 //         // eslint options (if necessary)
                 //     },
                 // },
             ]
         }
 };
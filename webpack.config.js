const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    rules : [
      {
        test : /\.(js|jsx)$/,
        include : APP_DIR,
        use: {
          loader : 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        use: {
          loader: 'url-loader?limit=5000&name=[path][name].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true,
    port: 9000
  },
  plugins : [
      new HtmlWebpackPlugin({
        title: "Share with care",
        template: "src/index.ejs",
        inject: false,
        chucksSortMode: 'dependency',
        //favicon: 'src/assets/img/favicon.ico'
      })
  ]
};

module.exports = config;

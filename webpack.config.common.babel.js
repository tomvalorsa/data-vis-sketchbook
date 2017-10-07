import path from 'path'
import copy from 'copy-webpack-plugin'

export default {
  entry: [
    'babel-polyfill',
    path.join(__dirname, './src/index.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        loader: 'file-loader?name=[hash].[ext]'
      },
      {
        test: /\.ico$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  resolve: {
    modules: ['src', 'node_modules']
  },
  plugins: [
    new copy([
      { from: './src/index.html' }
    ])
  ]
}

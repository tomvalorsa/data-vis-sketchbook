import webpack from 'webpack'
import autoprefixer from 'autoprefixer'
import path from 'path'
import commonConfig from './webpack.config.common.babel'

export default {
  ...commonConfig,
  module: {
    ...commonConfig.module,
    rules: [
      ...commonConfig.module.rules,
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[path][name]---[local]---[hash:base64:5]'
            }
          },
          {
            loader: "sass-loader"
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer()
              ]
            }
          }
        ],
        include: path.join(__dirname, 'src')
      },
    ]
  },
  entry: [
    'webpack-hot-middleware/client?reload=true', // Order is important here
    ...commonConfig.entry
  ],
  plugins: [
    ...commonConfig.plugins,
    new webpack.HotModuleReplacementPlugin()
  ]
}

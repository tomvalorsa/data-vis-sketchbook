import path from 'path'
import express from 'express'
import webpack from 'webpack'
import config from './webpack.config.babel'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

const isDeveloping = process.env.NODE_ENV !== 'production'
const app = express()

if (isDeveloping) {
  const compiler = webpack(config)
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  })

  app.use(middleware)
  app.use(webpackHotMiddleware(compiler))
} else {
  app.use(express.static(__dirname + '/dist'))
}

// React router/components
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/dist/index.html'))
})


app.listen(3000, 'localhost', err => {
  if (err) return console.log(err)

  console.log('App listening at http://localhost:3000...go do some work')
})

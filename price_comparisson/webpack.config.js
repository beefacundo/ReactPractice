const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

var loaderOptions = {
  mozjpeg: {
    quality: 65
  },
  pngquant:{
    quality: "65-90",
    speed: 4
  },
  svgo:{
    plugins: [
      {
        removeViewBox: false
      },
      {
        removeEmptyAttrs: false
      }
    ]
  },
  gifsicle: {
    optimizationLevel: 7,
    interlaced: false
  },
  optipng: {
    optimizationLevel: 7,
    interlaced: false
  }
}

var fileLoaderOptions = {
  hash: 'sha512',
  digest: 'hex',
  name: '[hash].[ext]'
}

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, 'src', 'index.js')],
  devtool: 'cheap-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:
        {
          presets: ['react', 'es2015'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
            {
              loader:'file-loader',
              options: fileLoaderOptions
            },
            {
              loader:'image-webpack-loader',
              options: loaderOptions
            }
          ]/*

            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
          
        ]*/
      }
    ]
  },
  devServer: {
    proxy: {
      '/samana/**': {
        target: 'http://localhost:8882'
      }
    },
    inline: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/public/index.html`
    }),
    new ExtractTextPlugin('cartola.css')
  ]
}

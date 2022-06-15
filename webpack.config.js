const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  context: __dirname,
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              exclude: '/node_modules/',
              generatorOpts: { compact: false }
            }
          }
        ]
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|j?g|svg|gif|webp)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024000
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      favicon: './public/favicon.ico',
      filename: 'index.html',
      manifest: './public/manifest.json'
    })
  ]
}

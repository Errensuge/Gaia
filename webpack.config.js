const path = require('path')

module.exports = {
  entry: './src/Main.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist'
  },
  resolve: { extensions: ['.jsx', '.js'] },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets:['env','react', "stage-2"] }
      },
      { test: /(\.css$)/, loaders: ['style-loader','css-loader']},
      { test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, loader: 'file-loader' }
    ]
  },
  devServer: { historyApiFallback: true }
}

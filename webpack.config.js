var webpack = require('webpack');
 
module.exports = {
  entry: [
          './model/logic.js',
          './components/main.js',
          './components/confirm.js',
          './actions/actions.js',
          './actions/states.js'
  ],
  output: { path: __dirname, filename: './public/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
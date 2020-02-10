//  Add path module to manipulate file paths
const path = require('path');
module.exports = { 
  // Add react entry file
  entry: './client/index.js',
  // Output deals with where the complied code goes. It add it into a bundle file located in the dist folder.
  mode: 'development',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  // Specifiy loader
  module: { 
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  }
};
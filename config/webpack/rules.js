

module.exports = [
  {
    test: /\.(js|jsx)$/,
    use: 'babel-loader',
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    include: /node_modules/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader",
          options:{
            modules: true
          }
        }
      ]
  },
  {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: {
            localIdentName: '[name]_[local]__[hash:base64:5]'
          }
        }
      },
      {
        loader: 'postcss-loader'
      }
    ]
  },
  {
    test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  }
];

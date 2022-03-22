const { CleanWebPackPlugin } = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.export = {
  module:{
    rules:[
      {
        test: /\.(s(a|c)ss|css)$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules :{
                localIdentName: '[local]',
                }
              },
            },
            {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    }
            },
          ]
      },
      {
        test: /\.(s(a|c)ss|css)$/,
        exlude: /\.module.(s(a|c)ss)$/,
        loader: [
          MiniCssExtractPlugin.loader,
            'css-loader',
            {
                loader:'sass-loader',
                options: {
                    sourceMap:true,
                }
            }
        ],
    },
    ]
  },
  plugins: [
    new CleanWebPackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash:6].css',
      chunkfilename: 'style.[contenthash:6].css',
      publicPath: './',
    }),
  ]
}
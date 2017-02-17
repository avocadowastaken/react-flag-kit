const path = require('path');
const root = path.resolve(__dirname, '../');
const autoprefixer = require('autoprefixer');

module.exports = {
  postcss: () => [autoprefixer({ browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'] })],
  module: {
    loaders: [
      {
        test: /\.css?$/,
        include: root,
        loaders: [
          require.resolve('style-loader'),
          require.resolve('css-loader') + '?importLoaders=1',
          require.resolve('postcss-loader')
        ]
      },
      {
        test: /\.json$/,
        include: root,
        loader: require.resolve('json-loader')
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        include: root,
        loader: require.resolve('file-loader'),
        query: {
          name: (
            process.env.NODE_ENV === 'development' ? 'static/media/[path][name].[ext]' : 'static/media/[name].[ext]'
          )
        }
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        include: root,
        loader: require.resolve('url-loader'),
        query: {
          limit: 10000,
          name: 'static/media/[name].[ext]'
        }
      }
    ]
  }
};

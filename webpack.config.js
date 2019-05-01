const babelLoader = {
  test: /\.js?$/,
  exclude: /node_modules/,
  loader: 'babel-loader'
};

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [babelLoader]
  }
};
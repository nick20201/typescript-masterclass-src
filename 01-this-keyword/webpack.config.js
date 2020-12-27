var path = require('path');

module.exports = {
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  resolve: {
      extensions: ['.ts', '.js']
  },
  module: {
      rules: [{ test: /\.ts$/, use:'awesome-typescript-loader'}],
  },
  devServer: {
      port: 3000,
  },
};
//See: Configuration section for all supported configuration options


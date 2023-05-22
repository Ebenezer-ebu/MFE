module.exports = {
  module: {
    // Loaders: this is to process all of our code from ES2016, 17, 19, 20 to regular ES5 code that can be executed in a typical browser
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};

const path = require('path');

module.exports = {
  entry: './src/index.js', // Caminho para o arquivo principal
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // A saída será na pasta "dist"
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Compila arquivos .js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Usa Babel para transformar JS moderno
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/, // Lida com arquivos CSS
        use: ['style-loader', 'css-loader'] // Aplica os loaders de estilo e CSS
      }
    ]
  },
  devtool: 'source-map', // Facilita o debugging
  mode: 'production', // Modo de produção para otimização
  optimization: {
    minimize: true // Minifica o código final
  }
};


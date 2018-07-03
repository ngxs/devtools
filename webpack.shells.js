const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    'background': path.resolve(__dirname, 'shells/chrome/background.ts'),
    'inject-devtools-api': path.resolve(__dirname, 'shells/chrome/inject-devtools-api.ts'),
    'devtools': path.resolve(__dirname, 'shells/chrome/devtools.ts'),
    'devtools-api-script': path.resolve(__dirname, 'shells/chrome/devtools-api-script.ts')
  },
  output: {
    path: path.resolve(__dirname, 'dist/shells/chrome'),
    filename: '[name].js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  optimization: {
    minimize: false
  },
  plugins: [
    new CleanWebpackPlugin(
      [path.resolve(__dirname, 'dist/shells')],
      {
        verbose: true
      }
    ),
    isProd ? new FileManagerPlugin({
      onEnd: {
        copy: [
          {source: path.resolve(__dirname, 'dist/devtools'), destination: 'shells/chrome/devtools'}
        ]
      }
    }) : () => {},
    new CopyWebpackPlugin([
      {
        from: 'shells/**/*',
        to: path.resolve(__dirname, 'dist'),
        ignore: ['*.ts']
      }
    ])
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: path.resolve(__dirname, 'tsconfig.shells.json')
        }
      }
    ]
  }
};
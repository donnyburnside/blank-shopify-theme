const path = require('path'),
      CopyPlugin = require('copy-webpack-plugin'),
      CssMinimizerPlugin = require('css-minimizer-webpack-plugin'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      TerserPlugin = require('terser-webpack-plugin');

// Settings
const PRODUCTION = process.env.NODE_ENV === 'production';
const OUTPUT_DIR = path.resolve(__dirname, 'dist');

// Create  the config
const config = {
  entry: {
    theme: [
      './src/scripts/theme.js',
      './src/styles/theme.scss'
    ]
  },
  output: {
    filename: 'assets/[name].js',
    path: OUTPUT_DIR
  },
  mode: (PRODUCTION ? 'production' : 'development'),
  devtool: false,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|jspm_packages|bower_components)/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]'
        }
      }
    ],
  },
  optimization: {
    minimize: PRODUCTION,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            drop_console: true
          },
          format: {
            comments: false,
          }
        },
        extractComments: false,
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets',
          to: 'assets',
          noErrorOnMissing: true,
          globOptions: {
            ignore: ['.gitkeep'],
          },
        },
        {
          from: 'src/config',
          to: 'config',
        },
        {
          from: 'src/layout',
          to: 'layout',
        },
        {
          from: 'src/locales',
          to: 'locales',
        },
        {
          from: 'src/sections',
          to: 'sections',
          globOptions: {
            ignore: ['.gitkeep'],
          },
        }
        ,{
          from: 'src/snippets',
          to: 'snippets',
          globOptions: {
            ignore: ['.gitkeep'],
          },
        }
        ,{
          from: 'src/templates',
          to: 'templates',
        },
      ]
    }),
  ],
};

// Export the config
module.exports = config;
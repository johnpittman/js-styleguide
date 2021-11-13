const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = ({ config }) => {
  // Use custom css rules
  const cssLoaderRule = config.module.rules.find((rule) => !Array.isArray(rule.test) && rule.test.test('.css'));
  cssLoaderRule.exclude = /\.module\.css$/;

  // Add loaders to proccess CSS modules
  config.module.rules.push({
    test: /\.module\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: {
            localIdentName: process.env.NODE_ENV === 'production'
            ? '[hash:base64]'
            : '[name]__[local]--[hash:base64:5]'
          }
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            config: path.resolve(__dirname, '../postcss.config.js')
          }
        }
      }
    ]
  });

  // Use custom svg rules
  const fileLoaderRule = config.module.rules.find((rule) => !Array.isArray(rule.test) && rule.test.test('.svg'));
  fileLoaderRule.exclude = /\.svg$/;

  // Use svgr for svg files
  config.module.rules.push({
    issuer: /\.(js|ts)x$/,
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [{ removeViewBox: false }],
            icon: true
          }
        }
      }
    ]
  });

  config.resolve.plugins.push(
    new TsconfigPathsPlugin({
      configFile: path.resolve(__dirname, '../tsconfig.json'),
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      logLevel: 'INFO',
      baseUrl: path.resolve(__dirname, '../'),
      mainFields: ['browser', 'main']
    })
  );

  return config;
};

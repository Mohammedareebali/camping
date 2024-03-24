const webpack = require('webpack');
const path = require('path');

module.exports = function override(config, env) {
  const isEnvProduction = env === 'production';

  // Use custom Babel configuration
  const babelLoader = config.module.rules
    .find((rule) => Array.isArray(rule.oneOf))
    .oneOf.find(
      (loader) =>
        loader.loader &&
        loader.loader.includes(path.join('babel-loader', 'lib', 'index.js'))
    );

  if (babelLoader) {
    babelLoader.options.babelrc = true;
  }

  // Your existing configuration
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    assert: require.resolve('assert'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    os: require.resolve('os-browserify'),
    url: require.resolve('url'),
  });
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);

  return config;
};

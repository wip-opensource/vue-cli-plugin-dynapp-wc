module.exports = (api, options, rootOptions) => {
  api.configureWebpack(config => {
    config.devServer = {
      port: 8181,
      host: '0.0.0.0',
      hot: true, // Equivalent to hotOnly(true) in Webpack 3
      client: { logging: 'warn' },
    };
  });
};
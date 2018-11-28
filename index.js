module.exports = (api, options, rootOptions) => {
  api.chainWebpack(config => {
    config.devServer
      .port(8181)
      .host('0.0.0.0')
      .hotOnly(true)
      .disableHostCheck(true)
      .clientLogLevel('warning')
      .inline(true);
  });
};
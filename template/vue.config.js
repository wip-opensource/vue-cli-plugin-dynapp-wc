module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './dist/' : '/',
  transpileDependencies: [
      "vuetify",
      /node_modules\/dync-[a-zA-Z0-9]+/,
      /node_modules\/@dynapp\//
  ]
};

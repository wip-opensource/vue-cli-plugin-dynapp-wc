module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      "axios": "^0.19.2"
    },
    eslintConfig: {
      rules: {
        "vue/require-v-for-key": 0
      }
    }
  });

  if (options.replaceComponents) {
    api.render('./template');
  }
};

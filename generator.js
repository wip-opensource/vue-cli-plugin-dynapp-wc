module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      "axios": "^0.18.0"
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
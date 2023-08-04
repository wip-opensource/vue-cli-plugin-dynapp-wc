module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      "axios": "^0.24.0"
    },
    eslintConfig: {
      rules: {
        "vue/require-v-for-key": 0,
        'vue/multi-word-component-names': 0,
        'vue/valid-v-slot': ['error', {
          allowModifiers: true,
        }]
      }
    }
  });

  if (options.replaceComponents) {
    api.render('./template');
  }
};

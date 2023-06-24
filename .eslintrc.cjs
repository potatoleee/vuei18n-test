/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'airbnb-base',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue']
      }
    },
    'import/core-modules': ['vite', '@vitejs/plugin-vue']
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': 'off'
  }
};

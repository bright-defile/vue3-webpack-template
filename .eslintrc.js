module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    //vue
    // "plugin:vue/vue3-essential", //lv1
    'plugin:vue/vue3-strongly-recommended', //lv2
    // 'plugin:vue/vue3-recommended', //lv3
    //js
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-var': 2,
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
};

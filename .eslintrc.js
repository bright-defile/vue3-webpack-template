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
    'no-unused-vars': 1,
    'prettier/prettier': ['error', {}, {usePrettierrc: true}],
    'vue/html-closing-bracket-newline': 0,
    // 'vue/html-closing-bracket-newline': [
    //   'error',
    //   {
    //     singleline: 'never',
    //     multiline: 'never',
    //   },
    // ],
    // 'vue/html-self-closing': [
    //   'error',
    //   {
    //     html: {
    //       void: 'always',
    //       normal: 'never',
    //       component: 'always',
    //     },
    //     svg: 'always',
    //     math: 'always',
    //   },
    // ],
    'vue/max-attributes-per-line': 0,
    'vue/singleline-html-element-content-newline': 0,
    // 'vue/html-indent': ['error', 2, { attribute: 2, closeBracket: 0 }],
    // 'vue/singleline-html-element-content-newline': [
    //   'error',
    //   {
    //     ignoreWhenNoAttributes: true,
    //     ignoreWhenEmpty: true,
    //     ignores: ['pre', 'textarea', 'p', 'span', 'li'],
    //   },
    // ],
    // 'vue/max-attributes-per-line': [
    //   'error',
    //   {
    //     singleline: 1,
    //     multiline: {
    //       max: 1,
    //       allowFirstLine: true,
    //     },
    //   },
    // ],
  },
}

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
    'plugin:vue/recommended',
    // 'prettier',
    'plugin:prettier/recommended',
    'plugin:prettier-vue/recommended',
  ],
  // plugins: ['prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-var': 2,
    'prettier/prettier': 'error',
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
    'vue/html-indent': ['error', 2, {attribute: 2, closeBracket: 0}],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea', 'p', 'span', 'li'],
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: true,
        },
      },
    ],
  },
}

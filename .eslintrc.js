module.exports = {
  root: true,
  extends: ['plugin:vue/essential', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-unused-vars': 1,
    semi: [1, 'never'],
    'no-empty': 1,
  },
}

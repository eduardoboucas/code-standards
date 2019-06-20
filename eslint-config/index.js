module.exports = {
  parserOptions: {
    ecmaVersion: 2019
  },
  env: {
    node: true,
    es6: true,
    mocha: true
  },
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'array-callback-return': 'error',
    eqeqeq: 'error',
    'no-await-in-loop': 'error',
    'no-else-return': 'error',
    'no-implicit-coercion': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-sequences': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'padding-line-between-statements': [
      'error',
      {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      },
      {blankLine: 'always', prev: 'block-like', next: '*'},
      {blankLine: 'always', prev: '*', next: 'return'}
    ],
    'prefer-const': 'error',
    'sort-imports': ['error', {ignoreCase: true}],
    yoda: 'error'
  }
}

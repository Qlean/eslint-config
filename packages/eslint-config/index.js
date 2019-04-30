module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    'airbnb-base/rules/strict',
    'airbnb/rules/react',
    'prettier',
    'prettier/react',
  ],
  plugins: ['no-loops'],
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    'global-require': 0,
    'react/jsx-filename-extension': [2, { 'extensions': ['.js'] }],
    'react/destructuring-assignment': [2, 'always', { 'ignoreClassFields': true }],
    'no-loops/no-loops': 2,
  },
};

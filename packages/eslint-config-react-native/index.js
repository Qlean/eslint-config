module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  plugins: [
    'react-native',
    'no-loops'
  ],
  rules: {
    'global-require': 0,
    'react/jsx-filename-extension': [2, { 'extensions': ['.js'] }],
    'react/destructuring-assignment': ['always', { 'ignoreClassFields': true }],
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    'no-loops/no-loops': 2,
  },
  globals: {
    '__DEV__': true
  }
};
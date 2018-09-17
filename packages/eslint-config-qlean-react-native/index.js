module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react-native",
    "no-loops"
  ],
  "rules": {
    "global-require": 0,
    "react/require-default-props": 0,
    "react/jsx-filename-extension": [2, { "extensions": [".js"] }],
    "react/jsx-curly-spacing": [2, "never", { "allowMultiline": false }],
    "react/jsx-tag-spacing": [2, {
      "closingSlash": "never",
      "beforeSelfClosing": "never",
      "afterOpening": "never"
    }],
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "no-loops/no-loops": 2,
    "react/destructuring-assignment": ["always", { "ignoreClassFields": true }]
  },
  "globals": {
    "__DEV__": true
  }
};

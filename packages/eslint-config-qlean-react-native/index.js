module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react-native"
  ],
  "rules": {
    "global-require": 0,
    "react/require-default-props": 0,
    "react/forbid-prop-types": 0,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react/jsx-filename-extension": 0,
    "react/jsx-tag-spacing": [2, {
      "closingSlash": "never",
      "beforeSelfClosing": "never",
      "afterOpening": "never"
    }]
  },
  "globals": {
    "__DEV__": true
  },
};

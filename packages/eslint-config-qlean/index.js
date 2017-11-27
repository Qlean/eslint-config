module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb-base",
    "airbnb-base/rules/strict",
    "airbnb/rules/react"
  ],
  plugins: [
    "no-loops"
  ],
  "env": {
    "browser": true,
    "jest": true,
    "node": true
  },
  rules: {
    "global-require": 0,
    "react/require-default-props": 0,
    "react/jsx-filename-extension": [2, { "extensions": [".js"] }],
    "react/jsx-curly-spacing": [2, "never", { "allowMultiline": false }],
    "react/jsx-tag-spacing": [2, {
      "closingSlash": "never",
      "beforeSelfClosing": "never",
      "afterOpening": "never"
    }],
    "no-loops/no-loops": 2
  },
};

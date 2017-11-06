module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb-base",
    "airbnb-base/rules/strict",
    "airbnb/rules/react",
  ],
  plugins: [
    "no-loops"
  ],
  "env": {
    "browser": true,
    "node": true
  },
  rules: {
    "react/require-default-props": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-curly-spacing": [
      2,
      "never",
      { "allowMultiline": false }
    ],
    "global-require": 0,
    "no-loops/no-loops": 2
  },
};

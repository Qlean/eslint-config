# eslint-config-qlean

## Installation

Install config with peerDependencies by typing following command:
```sh
npm install -D eslint-config-qlean \
eslint-config-airbnb@16.1.0 \
eslint@4.9.0 \
babel-eslint@8.0.1 \
eslint-plugin-import@2.8.0 \
eslint-plugin-jsx-a11y@6.0.2 \
eslint-plugin-react@7.4.0 \
eslint-plugin-no-loops@0.3.0
```

## Usage

Add `"extends": "qlean"` to your .eslintrc

## Motivation

#### global-require
```js
"global-require": 0
```
Rule is redundant without Node.js

#### react/require-default-props
```js
"react/require-default-props": 0
```
Rule doesn't work with default params syntax in functional components and doesn't observe isRequired inside imported components

#### react/jsx-filename-extension
```js
"react/jsx-filename-extension": [2, { "extensions": [".js"] }]
```
Use JSX only inside files with `.js` extension

#### react/jsx-curly-spacing
```js
"react/jsx-curly-spacing": [2, "never", { "allowMultiline": false }]
```
Use stricter option for disallow spaces in paired tags

#### react/jsx-tag-spacing
```js
"react/jsx-tag-spacing": [2, {
  "closingSlash": "never",
  "beforeSelfClosing": "never",
  "afterOpening": "never"
}]
```
Forbid spaces near closing bracket

#### no-loops/no-loops
```js
"no-loops/no-loops": 2
```
Disallow use of loops (for, for-in, while, do-while, for-of)

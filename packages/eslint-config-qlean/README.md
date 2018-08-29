# eslint-config-qlean

## Installation

Install config with peerDependencies by typing following command:
```sh
npm install -D eslint-config-qlean \
eslint-config-airbnb@17.1.0 \
eslint-config-airbnb-base@13.1.0 \
eslint@5.4.0 \
babel-eslint@9.0.0 \
eslint-plugin-import@2.14.0 \
eslint-plugin-jsx-a11y@6.1.1 \
eslint-plugin-react@7.11.1 \
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

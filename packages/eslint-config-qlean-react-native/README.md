# eslint-config-qlean-react-native

This package provides Qlean's `.eslintrc` as an extensible shared config for linting React Native codebase.

## Installation

1. Install the correct versions of each package, which are listed by the command:
```sh
npm info "eslint-config-qlean-react-native" peerDependencies
```
2. Install the latest version of `eslint-config-qlean-react-native` package with following command:
```sh
npm install --save-dev eslint-config-qlean-react-native
```

## Usage

1. Add `"extends": "qlean-react-native"` to your .eslintrc

## Motivation for disabling rules

#### global-require
```js
"global-require": 0,
```
#### react/require-default-props
```js
"react/require-default-props": 0,
```
#### react-native/split-platform-components
```js
"react-native/split-platform-components": 2,
```
#### react-native/no-inline-styles
```js
"react-native/no-inline-styles": 2,
```
#### react-native/no-color-literals
```js
"react-native/no-color-literals": 2,
```
#### react/jsx-filename-extension
```js
"react/jsx-filename-extension": 0,
```
#### react/jsx-tag-spacing
```js
"react/jsx-tag-spacing": [2, {
  "closingSlash": "never",
  "beforeSelfClosing": "never",
  "afterOpening": "never"
}],
```

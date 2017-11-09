# eslint-config-qlean

This package provides Qlean's `.eslintrc` as an extensible shared config.

## Installation

1. Install the correct versions of each package, which are listed by the command:
```sh
npm info "eslint-config-qlean" peerDependencies
```
2. Install the latest version of `eslint-config-qlean` package with following command:
```sh
npm install --save-dev eslint-config-qlean
```

## Usage

1. Add `"extends": "qlean"` to your .eslintrc

## Motivation for disabling rules

#### react/require-default-props
```js
"react/require-default-props": 0,
```
#### react/forbid-prop-types
```js
"react/forbid-prop-types": 0,
```
#### react/jsx-filename-extension
```js
"react/jsx-filename-extension": 0,
```
#### react/jsx-curly-spacing
```js
"react/jsx-curly-spacing": [
  2,
  "never",
  { "allowMultiline": false }
],
```
#### global-require
```js
"global-require": 0,
```
#### no-loops/no-loops
```js
"no-loops/no-loops": 2
```

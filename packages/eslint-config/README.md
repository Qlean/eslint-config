# eslint-config

## Установка

```
$ npm install -D @qlean/eslint-config
```

## Использование

Нужно добавить `extends: "@qlean/eslint-config"` в `.eslintrc`

## Мотивация

#### global-require
```js
"global-require": 0
```
Конфликтует с механизмом `require()` Webpack и React Native, не имеет смысла вне NodeJS

#### react/jsx-filename-extension
```js
"react/jsx-filename-extension": [2, { "extensions": [".js"] }]
```
Разрешено только расширение `.js`

#### react/destructuring-assignment
```js
"react/destructuring-assignment": [always, { "ignoreClassFields": true }]
```
Подзволяет игнорировать обязательную деструкцию при использования полей класса, например `state`

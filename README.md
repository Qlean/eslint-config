# Конфиги для ESLint
Базируются на [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), подразумевают использование с Prettier.

- React: [eslint-config](https://github.com/Qlean/eslint-config/tree/master/packages/eslint-config)
- React Native: [eslint-config-react-native](https://github.com/Qlean/eslint-config/tree/master/packages/eslint-config-react-native)


## Правила

'import/prefer-default-export': 0 

 https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md

Отключено из-за того, что во многих модулях не подразумевается наличие экспорта по-умолчанию (например, файлы с GraphQL запросами или мутациями) и правило приходится каждый раз отключать вручную
#  Функции высшего порядка

Реализуйте функцию `takeOldest()`, которая принимает на вход список пользователей и возвращает самых взрослых. Количество возвращаемых пользователей задается вторым параметром, который по умолчанию равен единице. Экспортируйте данную функцию по умолчанию.

## Пример использования

```js
const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];
 
takeOldest(users);
// [
//   { name: 'Rob', birthday: 'Jan 11, 1975' },
// ];
```
Другие примеры смотрите в модуле с тестами.

## Подсказки

- Для преобразования дат в единое представление — unixtimestamp — используйте метод [Date.parse()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/parse)
- В рамках данного упражнения, для записи дат используется только формат RFC2822.
- Функция [sortBy](https://lodash.com/docs#sortBy)
- Подумайте, что из себя представляет данная функция: команду или запрос?
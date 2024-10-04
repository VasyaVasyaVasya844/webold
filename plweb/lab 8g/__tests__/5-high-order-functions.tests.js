import takeOldest from '../solutions/5-high-order-functions.js';

describe('Проверка функции takeOldest()', () => {
  const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
  ];

  it('Тест 1', () => {
    const expected = [
      { name: 'Rob', birthday: 'Jan 11, 1975' },
    ];
    expect(takeOldest(users)).toEqual(expected);
  });

  it('Тест 2', () => {
    const expected = [
      { name: 'Rob', birthday: 'Jan 11, 1975' },
      { name: 'Tirion', birthday: 'Nov 19, 1988' },
    ];
    expect(takeOldest(users, 2)).toEqual(expected);
  });

  it('Тест 3', () => {
    const expected = [
      { name: 'Rob', birthday: 'Jan 11, 1975' },
      { name: 'Tirion', birthday: 'Nov 19, 1988' },
      { name: 'Tisha', birthday: 'Feb 27, 1992' },
      { name: 'Chris', birthday: 'Dec 25, 1995' },
      { name: 'Sam', birthday: 'Nov 22, 1999' },
    ];
    expect(takeOldest(users, 5)).toEqual(expected);
  });
});

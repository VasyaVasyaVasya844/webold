import getFreeDomainsCount from '../solutions/9-signals.js'

describe('Проверка функции getFreeDomainsCount()', () => {
  it('should be empty', () => {
    expect(getFreeDomainsCount([])).toEqual({});
  });

  it('should be equal', () => {
    const emails = [
      'info@gmail.com',
      'info@yandex.ru',
      'info@hotmail.com',
      'mk@host.com',
      'support@hexlet.io',
      'key@yandex.ru',
      'sergey@gmail.com',
      'vovan@gmail.com',
      'vovan@hotmail.com',
      'ivan@yahoo.com',
    ];

    const expected = {
      'gmail.com': 3,
      'yandex.ru': 2,
      'hotmail.com': 2,
      'yahoo.com': 1,
    };

    expect(getFreeDomainsCount(emails)).toEqual(expected);
  });

  it('should not contains yahoo', () => {
    const emails = [
      'info@yandex.ru',
      'mk@host.com',
      'support@hexlet.io',
      'sergey@gmail.com',
      'vovan@gmail.com',
      'vovan@hotmail.com',
    ];

    const expected = {
      'gmail.com': 2,
      'yandex.ru': 1,
      'hotmail.com': 1,
    };

    expect(getFreeDomainsCount(emails)).toEqual(expected);
  });
});

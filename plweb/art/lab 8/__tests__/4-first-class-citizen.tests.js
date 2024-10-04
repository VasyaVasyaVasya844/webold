import run from '../solutions/4-first-class-citizen.js';

test('Проверка функции run()', () => {
  expect(run('')).toBeNull();
  expect(run('cb')).toBeNull();
  expect(run('power')).toBe('rewo');
  expect(run('kids')).toBe('sdik');
  expect(run('hexlet')).toBe('telx');
});

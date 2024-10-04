import { jest } from '@jest/globals';
import sayPrimeOrNot from '../solutions/1-pure-functions';

beforeEach(() => {
  console.log = jest.fn();
});

describe('Должно быть простым', () => {
  const numbers = [2, 3, 19, 23, 47, 5, 7, 13];

  test.each(numbers)('Проверка числа %i', (num) => {
    sayPrimeOrNot(num);
    expect(console.log).toHaveBeenLastCalledWith('yes');
  });
});

describe('Должно быть составным', () => {
  const numbers = [49, 8, 4, 1, 0, -3, 9, 25];

  test.each(numbers)('Проверка числа %i', (num) => {
    sayPrimeOrNot(num);
    expect(console.log).toHaveBeenLastCalledWith('no');
  });
});

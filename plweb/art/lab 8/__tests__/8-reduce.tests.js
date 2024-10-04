import groupBy from '../solutions/8-reduce.js';

const students = [
  { name: 'Tirion', class: 'B', mark: 2 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
  { name: 'Bronn', class: 'B', mark: 3 },
  { name: 'Sam', class: 'A', mark: 2 },
  { name: 'Aria', class: 'B', mark: 5 },
  { name: 'Keit', class: 'B', mark: 4 },
  { name: 'Rob', class: 'B', mark: 4 },
  { name: 'Taywin', class: 'A', mark: 5 },
];

const groupByClass = {
  B: [
    { name: 'Tirion', class: 'B', mark: 2 },
    { name: 'Bronn', class: 'B', mark: 3 },
    { name: 'Aria', class: 'B', mark: 5 },
    { name: 'Keit', class: 'B', mark: 4 },
    { name: 'Rob', class: 'B', mark: 4 },
  ],
  A: [
    { name: 'Keit', class: 'A', mark: 3 },
    { name: 'Ramsey', class: 'A', mark: 4 },
    { name: 'Sam', class: 'A', mark: 2 },
    { name: 'Taywin', class: 'A', mark: 5 },
  ],
};

const groupByMark = {
  2: [
    { name: 'Tirion', class: 'B', mark: 2 },
    { name: 'Sam', class: 'A', mark: 2 },
  ],
  3: [
    { name: 'Keit', class: 'A', mark: 3 },
    { name: 'Bronn', class: 'B', mark: 3 },
  ],
  4: [
    { name: 'Ramsey', class: 'A', mark: 4 },
    { name: 'Keit', class: 'B', mark: 4 },
    { name: 'Rob', class: 'B', mark: 4 },
  ],
  5: [
    { name: 'Aria', class: 'B', mark: 5 },
    { name: 'Taywin', class: 'A', mark: 5 },
  ],
};

const groupByName = {
  Tirion: [
    { name: 'Tirion', class: 'B', mark: 2 },
  ],
  Keit: [
    { name: 'Keit', class: 'A', mark: 3 },
    { name: 'Keit', class: 'B', mark: 4 },
  ],
  Ramsey: [
    { name: 'Ramsey', class: 'A', mark: 4 },
  ],
  Bronn: [
    { name: 'Bronn', class: 'B', mark: 3 },
  ],
  Sam: [
    { name: 'Sam', class: 'A', mark: 2 },
  ],
  Aria: [
    { name: 'Aria', class: 'B', mark: 5 },
  ],
  Rob: [
    { name: 'Rob', class: 'B', mark: 4 },
  ],
  Taywin: [
    { name: 'Taywin', class: 'A', mark: 5 },
  ],
};

test('Проверка функции groupBy()', () => {
  expect(groupBy([], '')).toMatchObject({});
  expect(groupBy([], 'class')).toMatchObject({});
  expect(groupBy(students, 'class')).toMatchObject(groupByClass);
  expect(groupBy(students, 'mark')).toMatchObject(groupByMark);
  expect(groupBy(students, 'name')).toMatchObject(groupByName);
});

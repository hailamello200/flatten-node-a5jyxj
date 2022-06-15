const flatten = require('./index');

test('Uso do flatten()', () => {
  /*console.log(flatten([10, [20, 30], 40, [50, 60]]));*/
  expect(flatten([1, [2, 3], 4, [5, 6]])).toBe([1, 2, 3, 4, 5, 6]);
  expect(flatten([[1, 2, 3]])).toBe([1, 2, 3]);
  expect(flatten([1, 2, 3])).toBe([1, 2, 3]);
});

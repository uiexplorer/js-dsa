function fromPairs(pairs) {
  const result = {};
  pairs.map(([key, value]) => (result[key] = value));
  return result;
}

const pairs = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
];

fromPairs(pairs); // => { a: 1, b: 2, c: 3 }

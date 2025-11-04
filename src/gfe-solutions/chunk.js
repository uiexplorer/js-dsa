function chunk(array, size = 1) {
  const result = [];
  let chunk = [];

  array.map((item, index) => {
    chunk.push(item);
    if (chunk.length === size || index === array.length - 1) {
      result.push(chunk);
      chunk = [];
    }
  });
  return result;
}

chunk(['a', 'b', 'c', 'd']); // => [['a'], ['b'], ['c'], ['d']]
chunk([1, 2, 3, 4], 2); // => [[1, 2], [3, 4]]
chunk([1, 2, 3, 4], 3); // => [[1, 2, 3], [4]]

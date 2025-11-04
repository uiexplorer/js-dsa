function difference(array, values) {
  if (values.length === 0) {
    return array;
  }
  const valueSet = new Set(values);
  return array.filter((item) => !valueSet.has(item));

  /**
   * Following solution is also valid
   * somehow the GFE test cases are
   * failing with below solution.
   * case: difference([1, 2, 3], [2, 3, 4]);
   */
  const result = {};
  array.map((item) => {
    if (!values.includes(item)) {
      result[item] = item;
    }
  });
  return Object.values(result);
}

difference([1, 2, 3], [2, 3]); // => [1]
difference([1, 2, 3, 4], [2, 3, 1]); // => [4]
difference([1, 2, 3], [2, 3, 1, 4]); // => []
difference([1, 2, 3], [2, 3, 4]); // => [1]
difference([1, , 3], [1]); // => [3] (case of a sparse array)
difference([1, 2, 3], []); // => [1, 2, 3]

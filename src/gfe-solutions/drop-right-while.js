function dropRightWhile(array, predicate) {
  /**
   * Both solutions have same time complexity O(n).
   * Solution with better space complexity of O(1).
   */
  let index = array.length - 1;
  while (index >= 0 && predicate(array[index], index, array)) {
    index--;
  }

  return array.slice(0, ++index);

  let result = array;
  let canSplice = true;
  for (let index = array.length - 1; index >= 0; index--) {
    const predicateResult = predicate(array[index], index, array);
    if (canSplice && predicateResult) {
      result = array.toSpliced(index);
    } else {
      canSplice = false;
    }
  }
  return result;
}

// Example 1: Basic usage
dropRightWhile([1, 2, 3, 4, 5], (value, _index, _array) => value > 3);
// => [1, 2, 3]
// Explanation: Starts from right (5). 5 > 3 (true, drop). 4 > 3 (true, drop). 3 > 3 (false, stop). Returns [1, 2, 3].

// Example 2: Predicate always true
dropRightWhile([1, 2, 3], (value, _index, _array) => value < 6);
// => []
// Explanation: 3 < 6 (true, drop). 2 < 6 (true, drop). 1 < 6 (true, drop). Returns empty array.

// Example 3: Predicate always false
dropRightWhile([1, 2, 3, 4, 5], (value, _index, _array) => value > 6);
// => [1, 3, 2, 4, 5]
// Explanation: 5 > 6 (false, stop immediately). Returns the original array slice.

// Example 4: Using the `index` argument
dropRightWhile([1, 2, 3, 4, 5], (_value, index, _array) => index > 2);
// => [1, 2, 3]
// Explanation: Starts at index 4. 4 > 2 (true, drop). Index 3. 3 > 2 (true, drop). Index 2. 2 > 2 (false, stop). Returns [1, 2, 3].

// Example 5: Using the `array` argument
dropRightWhile([10, 11, 12, 4, 5], (value, _index, array) => value < array[1]);
// => [10, 11, 12]
// Explanation: array[1] = 11. 5 < 11 (true, drop). 4 < 11 (true, drop). 12 < 11 (false, stop). Returns [10, 11, 12].

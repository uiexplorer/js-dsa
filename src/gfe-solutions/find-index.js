function findIndex(array, predicate, fromIndex = 0) {
  const startIndex = fromIndex >= 0 ? fromIndex : Math.max(array.length + fromIndex, 0);

  for (let index = startIndex; index < array.length; index++) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }

  return -1;
}

const arr = [1, 2, 3, 4, 5];

// Search for the first value in the array that is greater than 3.
findIndex(arr, (num) => num > 3); // => 3

// Start searching from index 4 (inclusive).
findIndex(arr, (num) => num > 3, 4); // => 4
findIndex(arr, (num) => num > 3, -2); // => 4

// No such element exists.
findIndex(arr, (num) => num > 10, 3); // => -1

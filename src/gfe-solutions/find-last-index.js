function findLastIndex(array, predicate, fromIndex = array.length - 1) {
  const startIndex =
    fromIndex < 0 ? Math.max(array.length + fromIndex, 0) : Math.min(fromIndex, array.length - 1);

  for (let index = startIndex; index >= 0; index--) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }

  return -1;
}

const arr = [5, 4, 3, 2, 1]; // Indices: 0, 1, 2, 3, 4

// Search for the element > 3, starting from the end (index 4).
findLastIndex(arr, (num) => num > 3); // => 1

// Start searching backwards from index 3.
// Check index 3: 2 > 1 is true. Stop.
findLastIndex(arr, (num) => num > 1, 3); // => 3

// Start searching backwards from index 3.
// Check index 3: 2 < 1 is false.
// Check index 2: 3 < 1 is false.
// Check index 1: 4 < 1 is false.
// Check index 0: 5 < 1 is false. Reached start and no element found.
findLastIndex(arr, (num) => num < 1, 3); // => -1

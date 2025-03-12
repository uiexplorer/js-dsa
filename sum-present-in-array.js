'use strict';

const array1 = [1, 2, 3, 9];
const array2 = [1, 2, 4, 6];

function isSumPresent1(arr, sum) {
  /**
   * This will be a brute force solution.
   * We will nest 2 for loops to find sum
   * of each item against all other items.
   * If any sum matches the criteria we will
   * return true else it will be false.
   * Time complexity: O(n^2)
   * Space complexity: O(0)
   */

  return arr.some((item) => {
    return arr.some((innerItem) => {
      if (item + innerItem === sum) {
        return true;
      }
    });
  });
}

function isSumPresent2(arr, sum) {
  /**
   * We will use set for this solution and add
   * the complement of each number to the set
   * when we are on next index we will check
   * in the set if the complement is present
   * if yes we return true else we return false.
   */
  const complements = new Set();
  return arr.some((item) => {
    if (complements.has(item)) {
      return true;
    } else {
      complements.add(sum - item);
      return false;
    }
  });
}

console.log(isSumPresent1(array1, 8));
console.log(isSumPresent2(array1, 8));
console.log(isSumPresent1(array2, 8));
console.log(isSumPresent2(array2, 8));

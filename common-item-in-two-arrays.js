'use strict';

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['x', 'y', 'z'];
const array3 = ['p', 'q', 'r'];

function hasCommonItem1(arr1, arr2) {
  /**
   * Loop over each array item from first array &
   * within create a nested array to loop over second array
   * compare each arr1Item to every arr2Item
   * If there's a match return true else return false
   * This is a bad solution as we have nestead the array loops
   * & the Time complexity for this solution is O(n^2),
   * Space complexity is O(0) as we are not creating any new
   * variables here.
   */
  return arr1.some((arr1Item) =>
    arr2.some((arr2Item) => {
      if (arr1Item === arr2Item) {
        return true;
      }
    })
  );
}

function hasCommonItem2(arr1, arr2) {
  /**
   * We will loop over the first array & covert each item
   * in a object property key. Then we will loop over second
   * array to check if the item exist in the object
   * that we just created. This is a fair solution as the:
   * Time complexity is O(n + n) &
   * Space complexity is O(n) as we create Object with n properties.
   */
  const map = {};
  arr1.forEach((item) => {
    if (!map[item]) {
      map[item] = true;
    }
  });
  return arr2.some((item) => {
    if (map[item]) {
      return true;
    }
  });
}

console.log(hasCommonItem1(array1, array2));
console.log(hasCommonItem2(array1, array2));
console.log(hasCommonItem1(array1, array3));
console.log(hasCommonItem2(array1, array3));

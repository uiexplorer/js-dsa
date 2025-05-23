'use strict';

const mergeSortedArrays = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a - b);

function quickSort(arr) {
  /**
   * arr: [0, 3, 4, 31, 4, 6, 30]
   * [0, 3, 4, 4, 6] <== 30 ==> [31]
   * [0, 3, 4, 4] <== 6 ==> [], 30, 31
   * [0, 3] <== 4 ==> [4], 6, 30, 31
   * [0] <== 3 ==> [], 4, 6, 30, 31
   * 0, 3, 4, 6, 30, 31
   */
  if (arr.length <= 1) {
    return arr;
  }

  const left = [];
  const pivot = arr[arr.length - 1];
  const right = [];

  for (let index = 0; index < arr.length - 1; index++) {
    if (arr[index] < pivot) {
      left.push(arr[index]);
    } else {
      right.push(arr[index]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function mergeSortedArrays2(arr1, arr2) {
  return quickSort(arr1.concat(arr2));
}

const result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
console.log(result);
const result2 = mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30]);
console.log(result2);

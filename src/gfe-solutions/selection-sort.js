function selectionSort(arr) {
  for (let index = 0; index < arr.length; index++) {
    const unsortedArray = arr.slice(index);
    const minItem = Math.min(...unsortedArray);
    const minItemIndex = unsortedArray.indexOf(minItem);

    const temp = arr[index];
    arr[index] = minItem;
    arr[index + minItemIndex] = temp;
  }
  return arr;
}

selectionSort([9, 3, 6, 2, 1, 11]); // => [1, 2, 3, 6, 9, 11]
selectionSort([12, 16, 14, 1, 2, 3]); // => [1, 2, 3, 12, 14, 16]
selectionSort([1, 1]); // => [1, 1]
selectionSort([2, 2, 2]); // => [2, 2, 2]
selectionSort([2, 1, 2]); // => [1, 2, 2]
selectionSort([1, 1, 1, 1, 1, 1]); // => [1, 1, 1, 1, 1, 1]
selectionSort([7, 2, 4, 3, 1, 2]); // => [1, 2, 2, 3, 4, 7]

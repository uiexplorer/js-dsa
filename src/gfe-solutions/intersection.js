function intersection(...arrays) {
  if (!arrays?.length) {
    return [];
  }

  let result = new Set(arrays[0]);

  if (arrays.length === 1) {
    return Array.from(result);
  }

  let index = 1;

  while (index < arrays.length) {
    const tempSet = new Set(arrays[index]);
    const tempResult = [];
    result.forEach((item) => {
      if (tempSet.has(item)) {
        tempResult.push(item);
      }
    });
    result = tempResult;
    if (result.length === 0) {
      return [];
    }
    index++;
  }

  return result;
}

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [3, 4, 5];

intersection(arr1, arr2, arr3); // => [3]

const arr4 = [1, 5, 7, 9, 7];
intersection(arr4); // [1, 5, 7, 9]

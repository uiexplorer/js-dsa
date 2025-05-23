function getFirstRecurringNumber(inputArray) {
  for (let index = 0; index < inputArray.length; index++) {
    const element = inputArray[index];
    const subArray = inputArray.slice(index + 1);
    if (subArray.includes(element)) {
      return element;
    }
  }
} // O(n^2)

console.log(getFirstRecurringNumber([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(getFirstRecurringNumber([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(getFirstRecurringNumber([2, 3, 4, 5]));

function getFirstRecurringNumberByHashTable(inputArray) {
  const numHashMap = {};
  for (let index = 0; index < inputArray.length; index++) {
    const element = inputArray[index];
    if (numHashMap[element]) {
      return element;
    }
    numHashMap[element] = true;
  }
} // O(n)

console.log(getFirstRecurringNumberByHashTable([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(getFirstRecurringNumberByHashTable([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(getFirstRecurringNumberByHashTable([2, 3, 4, 5]));

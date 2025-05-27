/**
 * Find the number in fibonacci sequence at given index.
 * e.g. input of index = 3 should return 2 as a result
 * e.g. input of index = 6 should return 8 as a result
 * e.g. input of index = 10 should return 55 as a result
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
 */
const fibonacciSeries = [0, 1];
let counter = 0;
function findFibonacciElelmentAtIndexRecursively(index) {
  if (index === 1) {
    return fibonacciSeries[fibonacciSeries.length - 1];
  }
  counter = counter + 1;
  const length = fibonacciSeries.length;
  const nextNumberInSeries = fibonacciSeries[length - 2] + fibonacciSeries[length - 1];
  fibonacciSeries.push(nextNumberInSeries);
  return findFibonacciElelmentAtIndexRecursively(index - 1);
}

function findFibonacciElelmentAtIndexIteratively(index) {
  const fibonacciSeries = [0, 1];
  for (let counter = index; counter > 1; counter--) {
    const length = fibonacciSeries.length;
    const nextNumberInSeries = fibonacciSeries[length - 2] + fibonacciSeries[length - 1];
    fibonacciSeries.push(nextNumberInSeries);
  }
  return fibonacciSeries[fibonacciSeries.length - 1];
}

// console.log(findFibonacciElelmentAtIndexRecursively(3));
// console.log(findFibonacciElelmentAtIndexRecursively(6));
console.log(findFibonacciElelmentAtIndexRecursively(10));

console.log(findFibonacciElelmentAtIndexIteratively(3));
console.log(findFibonacciElelmentAtIndexIteratively(6));
console.log(findFibonacciElelmentAtIndexIteratively(10));

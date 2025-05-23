/**
 * 1 * 5 = 5
 * 5 * 4 = 20
 * 20 * 3 = 60
 * 60 * 2 = 120
 * 120
 */

let factorial = 1;
function findFactorialRecursively(num) {
  if (num === 1) {
    return factorial;
  }
  factorial = factorial * num;
  return findFactorialRecursively(num - 1);
}

function findFactorialIteratively(num) {
  let factorial = 1;
  for (let index = num; index > 1; index--) {
    factorial = factorial * index;
  }
  return factorial;
}

console.log(findFactorialRecursively(5));
console.log(findFactorialIteratively(5));

let reversedString = '';
function reverseStringRecursively(str) {
  const lastCharacter = str[str.length - 1];
  reversedString = reversedString + lastCharacter;
  if (str.length === 1) {
    return reversedString;
  }
  return reverseStringRecursively(str.split('').slice(0, -1).join(''));
}

const reverseStringES6 = (str) => str.split('').reverse().join('');

function reverseStringIteratively(str) {
  const strArray = str.split('');
  let reversedString = '';
  for (let index = strArray.length - 1; index >= 0; index--) {
    reversedString = reversedString + strArray[index];
  }
  return reversedString;
}

console.log(reverseStringRecursively('amit'));
console.log(reverseStringES6('amit'));
console.log(reverseStringIteratively('amit'));

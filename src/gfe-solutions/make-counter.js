function makeCounter(initialValue = 0) {
  let count = initialValue;

  return function () {
    return count++;
  };
}

const counterWithDefaultInit = makeCounter();
counter(); // 0
counter(); // 1
counter(); // 2

const counterWithCustomInit = makeCounter(5);
counter(); // 5
counter(); // 6
counter(); // 7

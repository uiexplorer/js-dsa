function once(func) {
  let cache;

  return function (...value) {
    if (!cache) {
      cache = func.call(this, ...value);
    }
    return cache;
  };
}

let i = 1;

function incrementBy(value) {
  i += value;
  return i;
}

const incrementByOnce = once(incrementBy);
incrementByOnce(2); // i is now 3; The function returns 3.
incrementByOnce(3); // i is still 3; The function returns the result of the first invocation, which is 3.
i = 4;
incrementByOnce(2, 5); // i is still 4 as it is not modified. However, the function returns the result of the first invocation, which is 3.

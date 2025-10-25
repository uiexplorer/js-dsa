function printFullName() {
  const cache = {};

  return function (firstName) {
    if (!cache[firstName]) {
      /**
       * CONSIDER THIS PROCESSING IS
       * EQUIVALENT TO A COMPLEX COMPUTATIONAL
       * LOGIC WHICH WILL TAKE SECONDS/MINUTES
       * TO PROCESS.
       */
      console.log('processing...');
      cache[firstName] = `${firstName} Kumbharkar`;
    }
    return cache[firstName];
  };
}

const memoized = printFullName();

console.log(memoized('Elara'));
console.log(memoized('Jasper'));
console.log(memoized('Silas'));
console.log(memoized('Clementine'));
console.log(memoized('Finnian'));
console.log(memoized('Elara'));
console.log(memoized('Jasper'));
console.log(memoized('Silas'));
console.log(memoized('Clementine'));
console.log(memoized('Finnian'));

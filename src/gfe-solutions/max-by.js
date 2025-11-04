function maxBy(array, iteratee) {
  let result;
  let cachedMaxResult;

  array.map((item) => {
    const iterateeResult = iteratee(item);
    if (iterateeResult && (!cachedMaxResult || iterateeResult > cachedMaxResult)) {
      result = item;
      cachedMaxResult = iterateeResult;
    }
  });

  return result;
}

maxBy([{ n: 1 }, { n: 2 }], (o) => o.n); // => { n: 2 }

maxBy([1, 2], (o) => -o); // => 1

maxBy([{ n: 1 }, { n: 2 }], (o) => o.m); // => undefined

maxBy([{ n: null }, { n: 10 }, { n: undefined }], (o) => o.n); // { n: 10 }

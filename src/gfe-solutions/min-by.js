function minBy(array, iteratee) {
  let result, cachedMinResult;

  array.map((item) => {
    const iterateeResult = iteratee(item);

    if (iterateeResult && (!cachedMinResult || iterateeResult < cachedMinResult)) {
      cachedMinResult = iterateeResult;
      result = item;
    }
  });

  return result;
}

minBy([2, 3, 1, 4], (num) => num); // => 1

minBy([{ n: 1 }, { n: 2 }], (o) => o.n); // => { n: 1 }

minBy([{ n: 1 }, { n: 2 }], (o) => o.m); // => undefined

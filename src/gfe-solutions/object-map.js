function objectMap(obj, fn) {
  const entries = Object.entries(obj);
  const result = {};

  entries.map(([key, value]) => {
    if (obj.hasOwnProperty(key)) {
      result[key] = fn.call(obj, value);
    }
  });

  return result;
}

const double = (x) => x * 2;
objectMap({ foo: 1, bar: 2 }, double); // => { foo: 2, bar: 4}

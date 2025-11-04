function get(objectParam, pathParam, defaultValue) {
  const pathWay = Array.isArray(pathParam) ? pathParam : pathParam.split('.');
  let result = defaultValue;

  pathWay.map((pathItem, index) => {
    if (objectParam && objectParam[pathItem] !== undefined) {
      objectParam = objectParam[pathItem];
      if (index === pathWay.length - 1) {
        result = objectParam;
      }
    } else {
      return result;
    }
  });

  return result;
}

const john = {
  profile: {
    name: { firstName: 'John', lastName: 'Doe' },
    age: 20,
    gender: 'Male',
  },
};

const jane = {
  profile: {
    age: 19,
    gender: 'Female',
  },
};

// Using the `john` and `jane` objects from above
get(john, 'profile.name.firstName'); // 'John'
get(john, 'profile.gender'); // 'Male'
get(jane, 'profile.name.firstName'); // undefined

// An example where path is provided as an array
get({ a: { b: 2, c: { foo: 2 } } }, ['a', 'c']); // foo: 2,
get({ a: [{ b: { c: 3 } }] }, 'a.0.b.c'); // 3
get({ a: [{ b: { c: 3 } }] }, ['a', 0, 'b', 'c']); // 3

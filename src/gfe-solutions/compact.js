function compact(array) {
  return array.filter((item) => item);
}

compact([0, 1, false, 2, '', 3, null]); // => [1, 2, 3]
compact(['hello', 123, [], {}]); // => ['hello', 123, [], {}]

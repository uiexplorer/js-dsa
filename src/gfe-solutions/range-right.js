function rangeRight(start = 0, end, step = 1) {
  const result = [];

  if (end === undefined) {
    end = start;
    start = 0;
  }

  if (end < start && step === 1) {
    step = -1;
  }

  const length = (end - start) / (step || 1);

  for (let i = 0; i < length; i++) {
    result.unshift(start + i * step);
  }

  return result;
}

rangeRight(4); // => [3, 2, 1, 0]
rangeRight(-4); // => [-3, -2, -1, 0]
rangeRight(1, 5); // => [4, 3, 2, 1]
rangeRight(0, 20, 5); // => [15, 10, 5, 0]
rangeRight(0, -4, -1); // => [-3, -2, -1, 0]
rangeRight(1, 4, 0); // => [1, 1, 1]
range(0); // => []
range(1, 7, 2); // => [5, 3, 1]
range(1, 5, 0); // => [1, 1, 1, 1]
range(-4, -2, 0); // => [-4, -4]
range(-2, -4, 0); // => []

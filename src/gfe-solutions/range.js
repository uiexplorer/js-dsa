function range(start = 0, end, step = 1) {
  const result = [];

  if (start > end && step === 0) {
    return result;
  }

  const startRange = end ? start : 0;
  const endRange = end ? end : start;
  let index = startRange;
  const condition = (index, endRange) =>
    startRange > endRange ? index > endRange : index < endRange;

  while (condition(index, endRange)) {
    if (step === 0) {
      result.push(startRange);
      index++;
    } else {
      result.push(index);
      if (startRange > endRange) {
        index = index - (step < 0 ? -step : step);
      } else {
        index += step;
      }
    }
  }

  return result;
}

range(4); // => [0, 1, 2, 3]
range(-4); // => [0, -1, -2, -3]
range(1, 5); // => [1, 2, 3, 4]
range(0, 20, 5); // => [0, 5, 10, 15]
range(0, -4, -1); // => [0, -1, -2, -3]
range(1, 4, 0); // => [1, 1, 1]
range(0); // => []
range(1, 7, 2); // => [1, 3, 5]
range(1, 5, 0); // => [1, 1, 1, 1]
range(-4, -2, 0); // => [-4, -4]
range(-2, -4, 0); // => []

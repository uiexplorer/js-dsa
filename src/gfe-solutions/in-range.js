function inRange(value, start, end) {
  let rangeStart = end ? start : 0;
  let rangeEnd = end ?? start;

  if (rangeStart > rangeEnd) {
    const temp = rangeStart;
    rangeStart = rangeEnd;
    rangeEnd = temp;
  }

  return value >= rangeStart && value < rangeEnd;
}

// inRange(3, 2, 4); // => true
// inRange(4, 8); // => true
// inRange(4, 2); // => false
// inRange(2, 2); // => false
// inRange(1.2, 2); // => true
// inRange(5.2, 4); // => false
inRange(-3, -2, -6); // => true

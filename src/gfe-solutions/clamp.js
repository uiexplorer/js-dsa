function clamp(value, lower, upper) {
  if(value >= lower && value <= upper) {
    return value;
  } else if (value < lower) {
    return lower;
  }
  return upper;
}

// Within the bounds, return as-is.
clamp(3, 0, 5); // => 3

// Smaller than the lower bound.
clamp(-10, -3, 5); // => -3

// Bigger than the upper bound.
clamp(10, -5, 5); // => 5

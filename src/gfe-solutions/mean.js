function mean(array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / array.length;
}

mean([4, 2, 8, 6]); // => 5
mean([1, 2, 3, 4]); // => 2.5
mean([1, 2, 2]); // => 1.6666666666666667
mean([]); // => NaN

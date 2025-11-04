function numberOfArguments(...params) {
  return params.length;
}

numberOfArguments(); // 0
numberOfArguments(1); // 1
numberOfArguments(2, 3); // 2
numberOfArguments('a', 'b', 'c'); // 3

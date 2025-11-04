Array.prototype.square = function () {
  return this.map((item) => item * item);
};

[-2].square(); // [4]
[1, 2, 3, 4].square(); // [1, 4, 9, 16]

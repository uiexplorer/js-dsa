class Binary {
  constructor(arr) {
    this.arr = arr.sort((a, b) => a - b);
  }

  search(searchItem) {
    if (this.arr.length === 0) {
      console.log(null);
      return;
    }
    if (this.arr.length === 1) {
      if (this.arr[0] === searchItem) {
        console.log(this.arr[0]);
        return;
      }
      console.log(null);
      return;
    }
    const middleIndex = Math.floor(this.arr.length / 2);
    const middle = this.arr[middleIndex];
    if (searchItem === middle) {
      console.log(middle);
      return null;
    }
    if (searchItem > middle) {
      this.arr.splice(0, this.arr.indexOf(middle));
      this.search(searchItem);
    } else {
      this.arr.splice(this.arr.indexOf(middle));
      this.search(searchItem);
    }
  }
}

const binary1 = new Binary([1, 2, 3, 4, 5, 6, 7, 8]);
const binary2 = new Binary([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);
binary1.search(7);
binary2.search(4);
binary2.search(88);

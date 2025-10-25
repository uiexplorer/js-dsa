class Linear {
  constructor(arr) {
    this.arr = arr;
  }

  search(searchItem) {
    for (let index = 0; index < this.arr.length; index++) {
      if (this.arr[index] === searchItem) {
        console.log(index);
        return;
      }
    }
    console.log(null);
  }
}

const linear1 = new Linear([6, 5, 3, 1, 8, 7, 2, 4]);
const linear2 = new Linear([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);
linear1.search(7);
linear2.search(4);
linear2.search(88);

class Selection {
  constructor(arr) {
    this.arr = arr;
  }

  sort() {
    for (let index = 0; index < this.arr.length; index++) {
      let smallest = this.arr[index];
      let smallestNumIndex = index;
      for (let innerIndex = 0; innerIndex < this.arr.length; innerIndex++) {
        if (innerIndex > index && smallest > this.arr[innerIndex]) {
          smallest = this.arr[innerIndex];
          smallestNumIndex = innerIndex;
        }
      }
      const temp = this.arr[index];
      this.arr[index] = smallest;
      this.arr[smallestNumIndex] = temp;
    }
    console.log(this.arr);
  }
}

const selection1 = new Selection([8, 5, 2, 6, 9, 3, 1, 4, 0, 7]);
const selection2 = new Selection([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);
selection1.sort();
selection2.sort();

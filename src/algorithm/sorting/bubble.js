class Bubble {
  constructor(arr) {
    this.arr = arr;
  }

  sort() {
    for (let index = 0; index < this.arr.length; index++) {
      for (let innerIndex = 0; innerIndex < this.arr.length; innerIndex++) {
        // Reverse the condition to revers the array sorting e.g. [10, 9, 8, ..., 1]
        if (this.arr[index] < this.arr[innerIndex]) {
          const temp = this.arr[innerIndex];
          this.arr[innerIndex] = this.arr[index];
          this.arr[index] = temp;
        }
      }
    }
    console.log(this.arr);
  }
}

const bubble1 = new Bubble([6, 5, 3, 1, 8, 7, 2, 4]);
const bubble2 = new Bubble([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);
bubble1.sort();
bubble2.sort();

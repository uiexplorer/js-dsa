class Insertion {
  constructor(arr) {
    this.arr = arr;
  }

  sort() {
    for (let index = 1; index < this.arr.length; index++) {
      if (this.arr[index] < this.arr[0]) {
        this.arr.unshift(this.arr.splice(index, 1)[0]);
      } else {
        for (let innerIndex = 1; innerIndex < this.arr.length; innerIndex++) {
          if (
            this.arr[index] > this.arr[innerIndex - 1] &&
            this.arr[index] < this.arr[innerIndex]
          ) {
            this.arr.splice(innerIndex, 0, this.arr.splice(index, 1)[0]);
          }
        }
      }
    }
    console.log(this.arr);
  }
}

const insertion1 = new Insertion([8, 5, 2, 6, 9, 3, 1, 4, 0, 7]);
const insertion2 = new Insertion([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);
insertion1.sort();
insertion2.sort();

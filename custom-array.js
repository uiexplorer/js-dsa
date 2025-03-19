'use strict';

class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    this.shiftItemsToLeft(index);
    delete this.pop();
  }

  shiftItemsToLeft(index) {
    for (let i = index + 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }
  }

  unshift(item) {
    this.shiftItemsToRight();
    this.data[0] = item;
    this.length++;
  }

  shiftItemsToRight() {
    for (let index = this.length; index > 0; index--) {
      this.data[index] = this.data[index - 1];
      console.log(this.data[index + 1]);
    }
  }

  reverse() {
    /**
     * Hello My Name Riyansh !
     *   0   1   2     3     4
     */
    const reversedArray = {};
    for (let index = 0; index < this.length; index++) {
      reversedArray[index] = this.data[this.length - (index + 1)];
    }
    this.data = reversedArray;
  }
}

const newArray = new MyArray();
newArray.push('My');
newArray.push('Name');
newArray.push('is');
newArray.push('Amit.');
newArray.pop();
newArray.push('Riyansh');
newArray.push('!');
newArray.get(3);
newArray.delete(2);
newArray.unshift('Hello');
console.log(newArray.data);
newArray.reverse();
console.log(newArray.data);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length = this.length + 1;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }
    this.first = this.first.next;
    this.length = this.length - 1;
    if (this.length === 0) {
      this.last = null;
    }
  }
}

const myQueue = new Queue();

myQueue.enqueue('Tim');
myQueue.enqueue('John');
myQueue.enqueue('Jane');
console.log(myQueue.peek());
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length = this.length + 1;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    this.top = this.top.next;
    this.length = this.length - 1;
    if (this.isEmpty()) {
      this.bottom = null;
    }
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('youtube');
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);

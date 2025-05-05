// 10 --> 5 --> 16

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length = this.length + 1;
  }
  // 1 --> 7 --> 10 --> 5 --> 16
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length = this.length + 1;
  }

  // 123 --> 1 --> 7 --> 99 --> 10 --> 5 --> 16 --> 456
  insert(atIndex, value) {
    if (atIndex <= 0) {
      this.prepend(value);
      return;
    }
    if (atIndex >= this.length) {
      this.append(value);
      return;
    }
    let currentNode = this.head;
    for (let counter = 0; counter < atIndex; counter++) {
      if (counter === atIndex - 1) {
        const newNode = new Node(value);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length = this.length + 1;
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  // 123 --> 1 --> 7 --> 10 --> 5 --> 16 --> 456
  remove(atIndex) {
    if (atIndex < 0 || atIndex >= this.length) {
      console.log('Node does not exist!');
      return;
    }
    if (atIndex === 0) {
      this.head = this.head.next;
      this.length = this.length - 1;
      return;
    }
    let currentNode = this.head;
    for (let counter = 0; counter < atIndex; counter++) {
      if (counter === atIndex - 1) {
        currentNode.next = currentNode.next.next;
        if (currentNode.next === null) {
          this.tail = currentNode;
        }
        this.length = this.length - 1;
      } else {
        currentNode = currentNode.next;
      }
    }
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(7);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
console.log(myLinkedList);
myLinkedList.insert(-2, 123);
myLinkedList.insert(200, 456);
myLinkedList.remove(3);
console.log(myLinkedList);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

// 10 <--> 5 <--> 16
class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.next = null;
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length = this.length + 1;
  }

  // 1 --> 7 --> 10 --> 5 --> 16
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.previous = newNode;
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
        newNode.previous = currentNode.previous;
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
      this.head.previous = null;
      this.length = this.length - 1;
      return;
    }
    let currentNode = this.head;
    for (let counter = 0; counter < atIndex; counter++) {
      if (counter === atIndex - 1) {
        currentNode.next = currentNode.next.next;
        currentNode.next.previous = currentNode;
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

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(7);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.insert(2, 99);
console.log(myDoublyLinkedList);
myDoublyLinkedList.insert(-2, 123);
myDoublyLinkedList.insert(200, 456);
myDoublyLinkedList.remove(3);
console.log(myDoublyLinkedList);

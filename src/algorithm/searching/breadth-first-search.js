class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
  }

  insert(value) {
    const newNode = new Node(value);
    let currentNode = this.root;
    while (true) {
      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      console.log(`${value} Not Found!`);
      return;
    }
    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) {
        console.log(`${value} Found!`);
        return;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
      if (!currentNode) {
        console.log(`${value} Not Found!`);
        return;
      }
    }
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    console.log(list);
  }
}

/**
 *        9
 *    4        20
 * 1    6   15    170
 */

const myBinarySearchTree = new BinarySearchTree(9);
myBinarySearchTree.insert(4);
myBinarySearchTree.insert(6);
myBinarySearchTree.insert(20);
myBinarySearchTree.insert(170);
myBinarySearchTree.insert(15);
myBinarySearchTree.insert(1);

myBinarySearchTree.lookup(15);
myBinarySearchTree.lookup(150);

myBinarySearchTree.breadthFirstSearch();

console.log(myBinarySearchTree);

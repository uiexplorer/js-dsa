class Graph {
  constructor(node) {
    this.adjacentList = {
      [node]: [],
    };
    this.nodeCount = 1;
  }

  addNode(node) {
    this.adjacentList[node] = [];
    this.nodeCount = this.nodeCount + 1;
  }

  addConnection(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }

  printGraph() {
    console.log(this.adjacentList);
  }
}

const myGraph = new Graph(0);
myGraph.addNode(1);
myGraph.addNode(2);
myGraph.addNode(3);
myGraph.addNode(4);
myGraph.addNode(5);
myGraph.addNode(6);

myGraph.addConnection(0, 1);
myGraph.addConnection(0, 2);
myGraph.addConnection(1, 2);
myGraph.addConnection(1, 3);
myGraph.addConnection(2, 4);
myGraph.addConnection(3, 4);
myGraph.addConnection(4, 5);
myGraph.addConnection(5, 6);

myGraph.printGraph();

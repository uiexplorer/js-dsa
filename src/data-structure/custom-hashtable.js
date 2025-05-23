class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let index = 0; index < key.length; index++) {
      hash = (hash + key.charCodeAt(index) * index) % this.data.length;
    }
    console.log(`${key}, ${hash}`);
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.data[index]) {
      this.data[index] = [];
    }
    this.data[index].push([key, value]);
    console.log(this.data);
  }

  get(key) {
    const index = this._hash(key);
    if (this.data[index]) {
      const found = this.data[index].find((item) => item[0] === key);
      return found ? found[1] : undefined;
    }
    return undefined;
  }

  getKeys() {
    const keys = [];
    this.data.map((item) => {
      item.map((innerItem) => keys.push(innerItem[0]));
    });
    return keys;
  }
}

const myHashTable = new HashTable(5);

myHashTable.set('grapes', 10000);
myHashTable.set('apple', 20000);
myHashTable.set('banana', 30000);
myHashTable.set('guava', 40000);

// console.log(myHashTable.get('grapes'));
// console.log(myHashTable.get('apple'));
// console.log(myHashTable.get('banana'));
// console.log(myHashTable.get('guava'));

console.log(myHashTable.getKeys());

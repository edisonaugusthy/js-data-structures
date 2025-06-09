class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  peek() {
    // get the first item of the list
    return this.first ? this.first : null;
  }
  enqueue(item) {
    const isEmpty = this.first === null && this.last === null;
    const newNode = new Node(item);
    if (isEmpty) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.prev = newNode;
      this.last = newNode;
    }
    // add an item to the end of the list
  }
  dequeue() {
    // remove the first item from the list
    if (this.first === null) {
      return null;
    }
    if (this.last === this.first) {
      this.last = null;
    }
    const itemToRemove = this.first;
    this.first = itemToRemove.prev;
    return itemToRemove;
  }
}

//https://skilled.dev/course/implement-a-queue

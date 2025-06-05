class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.last = null;
  }

  peek() {
    // get the last item of the list
    return this.last;
  }
  push(item) {
    // add an item to the end of the list
    const newItem = newNode(item);
    newItem.prev = this.last;
    this.last = newItem;
    return newItem;
  }
  pop() {
    // remove the last item of the list
    const itemToRemove = this.last;
    if (itemToRemove) {
      this.last = itemToRemove.prev;
    }
    return itemToRemove;
  }
}

//https://skilled.dev/course/implement-a-stack

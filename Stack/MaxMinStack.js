class MaxMinStack {
  // Any of the initial methods can be updated
  constructor() {
    this.stack = [];
    this.minStack = [];
    this.maxStack = [];
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  push(item) {
    this.stack.push(item);
    if (this.maxStack.length === 0 || item >= this.getStackMax()) {
      this.maxStack.push(item);
    }
    if (this.minStack.length === 0 || item <= this.getStackMin()) {
      this.minStack.push(item);
    }

    return item;
  }
  pop() {
    const itemToRemove = this.stack.pop();
    if (itemToRemove === this.getStackMin()) {
      this.minStack.pop();
    }
    if (itemToRemove === this.getStackMax()) {
      this.maxStack.pop();
    }
    return itemToRemove;
  }

  // You must implement the methods below
  getStackMax() {
    // Return the largest integer currently in the stack (don't remove it)
    return this.maxStack[this.maxStack.length - 1];
  }
  getStackMin() {
    return this.minStack[this.minStack.length - 1];
    // Return the smallest integer currently in the stack (don't remove it)
  }
}
// /https://skilled.dev/course/max-min-stack

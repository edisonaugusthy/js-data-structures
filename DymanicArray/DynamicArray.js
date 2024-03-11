class DynamicArray {
  #length;
  #data;
  constructor() {
    this.#length = 0;
    this.#data = {};
  }

  get(index) {
    return this.#data[index];
  }
  push(value) {
    this.#data[this.#length] = value;
    this.#length++;
    return this.#length;
  }
  pop() {
    if (this.#length === 0) return undefined;
    const lastItem = this.#data[this.#length - 1];
    delete this.#data[this.#length - 1];
    this.#length--;
    return lastItem;
  }
  insert(value, index) {
    if (index < 0 || index > this.#length - 1) return undefined;
    this.#length++;
    for (let i = this.#length - 1; i > index; i--) {
      this.#data[i] = this.#data[i - 1];
    }
    this.#data[index] = value;
    return this.#data;
  }
  remove(index) {
    if (this.length === 0) return undefined;
    if (index < 0 || index > this.#length - 1) return undefined;
    const itemToBeRemoved = this.#data[index];

    for (let i = index; i < this.#length - 1; i++) {
      this.#data[i] = this.#data[i + 1];
    }
    this.#length--;
    delete this.#data[this.#length];
    return itemToBeRemoved;
  }
}

const array = new DynamicArray();
array.push("hello");
array.push("world");
array.push("qwrqwr");
array.push("sdfsdf");
array.push("vdfv");
array.push("dfsdf");
array.push("yhyt");
array.pop();
array.insert("mathi", 2);
array.remove(2);

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
    // Ensure we're inserting inside a valid array length
    if (index < 0 || index > this.#length - 1) return undefined;
    this.#length++;
    // Shift items up one spot from the insertion index to the new final spot in the array.
    // We iterate from the back since this is our new empty item
    for (let i = this.#length - 1; i > index; i--) {
      this.#data[i] = this.#data[i - 1];
    }
    // Add the new item
    this.#data[index] = value;
    return this.#data;
  }
  remove(index) {
    if (this.length === 0) return undefined;
    if (index < 0 || index > this.#length - 1) return undefined;
    const itemToBeRemoved = this.#data[index];
    // Shift items inward one index towards the one we remove
    for (let i = index; i < this.#length - 1; i++) {
      this.#data[i] = this.#data[i + 1];
    }
    this.#length--;
    // The item we want to delete is just overwritten to the value of the index that comes after it.
    // Since all items were shifted inward one spot, we need to remove the last index/item since our array size shrinks by 1

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

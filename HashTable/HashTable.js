class HashTable {
  constructor(size) {
    this.size = size;
    this.table = [];
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i].key === key) {
          return bucket[i].value;
        }
      }
    }

    return undefined;
  }

  insert(key, value) {
    const index = this.hash(key);

    if (!this.table[index]) {
      this.table[index] = [];
    }

    const currentValue = this.get(key);

    if (typeof currentValue !== "undefined") {
      const bucket = this.table[index];

      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i].key === key) {
          bucket[i].value = value;
        }
      }
    } else {
      this.table[index].push({ key, value });
    }
  }

  remove(key) {
    const value = this.get(key);
    this.insert(key, undefined);

    return value;
  }

  hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.size;
    }

    return hash;
  }
}


const hashTable = new HashTable(10);
hashTable.insert("grapes", 10000);
console.log(hashTable.table);

// for more:=> https://skilled.dev/course/implement-a-hash-table
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  prepend(head, data) {
    const prependNode = new Node(data);
    prependNode.next = head;
    return prependNode;
  }
  append(head, data) {
    const appendNode = new Node(data);
    let currentNode = head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = appendNode;
    return head;
  }
  insert(head, index, value) {
    if (index == 0) {
      return this.prepend(head, value);
    } else {
      let newNode = new Node(date);
      let currentNode = head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      const nodesAfter = currentNode.next;
      currentNode.next = newNode;
      newNode.next = nodesAfter;
    }
    return head;
  }
  delete(head, index) {
    if (index == 0) {
      return head.next;
    } else {
      let currentNode = head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      const nodeToBeRemoved = currentNode.next;
      currentNode.next = nodeToBeRemoved.next;
    }
    return head;
  }
}

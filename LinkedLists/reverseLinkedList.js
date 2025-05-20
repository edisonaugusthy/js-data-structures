class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Input

const headNode = new Node(42);
headNode.next = new Node(52);
headNode.next.next = new Node(4);
headNode.next.next.next = new Node(6);
headNode.next.next.next.next = new Node(1);
headNode.next.next.next.next.next = new Node(9000);
// ... then add more nodes
//42 -> 52 -> 4 -> 6 -> 1 -> 9000

const reverseLinkedList = (head) => {
  let currentNode = head; //42
  let previousNode = null;
  while (currentNode !== null) {
    const nextNode = currentNode.next; //52
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }
  return JSON.stringify(previousNode);
};
console.log(reverseLinkedList(headNode));

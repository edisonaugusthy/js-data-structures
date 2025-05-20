class LinkedList {
  constructor(timestamp) {
    this.timestamp = timestamp;
    this.next = null;
  }
}

// Input
const skilledChainHead = new LinkedList(42);
skilledChainHead.next = new LinkedList(159);

const devCoinHead = new LinkedList(123);
devCoinHead.next = new LinkedList(482);

// Output: combineBlockchains(skilledChainHead, devCoinHead)
// 42 -> 123 -> 159 -> 482 // ... and so on

function combineBlockchains(skilledChainHead, devCoinHead) {
  let combinedHead =
    skilledChainHead.timestamp < devCoinHead.timestamp
      ? skilledChainHead
      : devCoinHead;
  let combinedTail = combinedHead;
  let currentDevNode = devCoinHead;
  let currentSkilledNode = skilledChainHead;

  if (currentDevNode.timestamp < currentSkilledNode.timestamp) {
    currentDevNode = currentDevNode.next;
  } else {
    currentSkilledNode = currentSkilledNode.next;
  }

  while (currentDevNode !== null && currentSkilledNode !== null) {
    if (currentDevNode.timestamp < currentSkilledNode.timestamp) {
      combinedTail.next = currentDevNode;
      currentDevNode = currentDevNode.next;
    } else {
      combinedTail.next = currentSkilledNode;
      currentSkilledNode = currentSkilledNode.next;
    }
    combinedTail = combinedTail.next;
  }
  combinedTail.next = currentSkilledNode ?? currentDevNode;
  return JSON.stringify(combinedHead);
}
console.log(combineBlockchains(skilledChainHead, devCoinHead));

const findTargetIndex = (items, target) => {
  let startIndex = 0;
  let endIndx = items.length - 1;

  while (startIndex <= endIndx) {
    const midIndex = startIndex + Math.floor((endIndx - startIndex) / 2);
    if (items[midIndex] === target) {
      return midIndex;
    }
    // left side is sorted
    if (items[midIndex] >= items[startIndex]) {
      if (target >= items[startIndex] && target < items[midIndex]) {
        endIndx = midIndex - 1;
      } else {
        startIndex = midIndex + 1;
      }
    } else {
      //right is sorted
      if (target <= items[endIndx] && target > items[midIndex]) {
        startIndex = midIndex + 1;
      } else {
        endIndx = midIndex - 1;
      }
    }
  }
  return -1;
};

const items = [3, 4, 5, 6, 7, 8, 9, 0, 1, 2];
const target = 2;
console.log(findTargetIndex(items, target)); // 9
//https://skilled.dev/course/shifted-search

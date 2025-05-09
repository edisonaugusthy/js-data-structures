function binarySearch(list, toSearch) {
  let iteration = 0;
  let start = 0;
  let end = list.length - 1;
  while (start <= end) {
    iteration++;
    const midIndex = Math.floor((start + end) / 2);
    const mid = list[midIndex];
    if (mid === toSearch) {
      console.log(iteration);
      return midIndex;
    }
    if (mid < toSearch) {
      start = midIndex + 1;
    }
    if (mid > toSearch) {
      end = midIndex - 1;
    }
  }
  return -1;
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);

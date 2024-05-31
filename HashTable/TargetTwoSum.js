/**
 * @param {List[int]} array
 * @param {int} target
 * @return {List[List[int]]}
 */
const getTargetIndexes = (array, target) => {
  const map = new Map();
  const solutions = [];
  for (let i = 0; i < array.length; i++) {
    if (map.has(target - array[i])) {
      solutions.push([map.get(target - array[i]), i]);
    } else {
      map.set(array[i], i);
    }
  }
  return solutions;
};

const array = [4, -3, 80, 2, 9, 13, 5, 8];
const target = 10;
console.log(getTargetIndexes(array, target));

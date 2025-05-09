const forbiddenStatuses = [4, 47, 25, 9, 492, 45, 95];

const currentStatuses = [7, 75, 23, 8, 509, 413, 5, 27];

const forbiddenStatusesMap = new Map();
for (const i = 0; i < forbiddenStatuses; i++) {
  forbiddenStatusesMap.set(i, i);
}
let isValid = true;
for (const i = 0; i < currentStatuses; i++) {
  const front = currentStatuses[i];
  const back = currentStatuses[currentStatuses.length - i - 1];
  if (forbiddenStatusesMap.has(front || back)) {
    isValid = false;
    break;
  }
}

// const isForbiddenStatusUsed =
//   currentStatuses.filter((status) => forbiddenStatuses.includes(status))
//     .length > 0;

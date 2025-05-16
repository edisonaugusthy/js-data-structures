/**
 * @param {number} totalVersions
 * @return {number}
 */
const firstBadVersion = (totalVersions) => {
  let lowerBound = 1;
  let upperBound = totalVersions;

  while (lowerBound < upperBound) {
    const mid = lowerBound + Math.floor((upperBound - lowerBound) / 2);
    if (isBadVersion(mid)) {
      upperBound = mid;
    } else {
      lowerBound = mid + 1;
    }
  }
  return lowerBound;
};

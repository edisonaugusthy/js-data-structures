/**
 * @param {number[]} ageList
 * @return {number[]}
 */
const MIN_AGE = 0;
const MAX_AGE = 100;
const sortByAge = (ageList) => {
  const sortedAgeList = [];
  const ageCount = new Array(MAX_AGE + 1).fill(0);

  ageList.forEach((age) => ageCount[age]++);
  for (let age = MIN_AGE; age <= MAX_AGE; age++) {
    const count = ageCount[age];
    for (let i = 0; i < count; i++) {
      sortedAgeList.push(age);
    }
  }
  return sortedAgeList;
};

sortByAge([33, 25, 99, 50, 42, 33, 99, 25]);
//https://skilled.dev/course/age-sort

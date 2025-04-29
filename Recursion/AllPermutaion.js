//Write a function generatePermutations that finds all the permutations of an input string

/**
 * @param {str} string
 * @return {List[str]}
 */
const generatePermutations = (string) => {
  const returnVals = [];
  if (string.length < 2) {
    return [string];
  } else {
    for (let i = 0; i < string.length; i++) {
      const character = string[i]; //we got the first char
      // generate combinations
      // pass the characters except self
      const firstChar = string.slice(0, i);
      const lastChars = string.slice(i + 1, string.length);
      const remainingChar = firstChar + lastChars;
      const permutations = generatePermutations(remainingChar);
      for (let p of permutations) {
        returnVals.push(character + p);
      }
    }
  }
  return returnVals;
};

console.log(generatePermutations("code"));

//https://skilled.dev/course/generate-all-permutations

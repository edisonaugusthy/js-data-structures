// Input
const strings = [
  "racecar",
  "acerrac",
  "aaccerr",
  "naa",
  "aan",
  "todo",
  "doto",
  "code",
  "bob",
];

// Output: groupPermutationsOfPalindromes(strings);
//[["aaccerr", "acerrac", "racecar"], ["aan", "naa"], ["bob"]];
/**
 * @param {List[str]} strings
 * @return {List[List[str]]}
 */
function groupPermutationsOfPalindromes(strings) {
  let permutationsOfPalindromes = {};
  if (strings.length === 0) {
    return [];
  } else {
    strings.forEach((string) => {
      if (isPalindrome(string)) {
        const key = string.split("").sort().join("");
        if (permutationsOfPalindromes[key]) {
          permutationsOfPalindromes[key].push(string);
        } else {
          permutationsOfPalindromes[key] = [string];
        }
      }
    });
  }
  console.log(Object.values(permutationsOfPalindromes));
  return Object.values(permutationsOfPalindromes);
}

function isPalindrome(string) {
  const hash = {};
  for (let i of string) {
    const char = string[i];
    if (hash[char]) {
      hash[char]++;
    } else {
      hash[char] == 0;
    }
  }

  const oddNumberCount = Object.values(hash).filter((val) => val % 2 !== 0);
  return oddNumberCount < 2;
}

groupPermutationsOfPalindromes(strings);
//https://skilled.dev/course/group-permutations-of-palindromes

/**
 * @param {int} number
 * @return {int}
 */
const sumDigits = (number) => {
  // ** Base case ** - we know to stop when our number no longer has digits
  if (number === 0) {
    return 0;
  }
  /*
    Recursive Case:
      1. Extract the digit in the one's place using % 10
      2. Remove the one's place by dividing by 10 and rounding down (keeping it an int)
      3. Sum it recursively with the rest of the digits in the integer
  */
  const onsPlace = number % 10;
  const trimmedItem = parseInt(number / 10);
  return onsPlace + sumDigits(trimmedItem);
};

console.log(sumDigits(5510));
// https://skilled.dev/course/sum-digits

/**
 * @param {str} string
 * @return {bool}
 */
const hasValidBrackets = (string) => {
  const validChars = {
    "[": "]",
    "{": "}",
    "(": ")",
  };
  const validOpenings = Object.keys(validChars);
  const validClosings = Object.values(validChars);
  const charStack = [];
  for (const character of string) {
    if (validOpenings.includes(character)) {
      charStack.push(character);
    } else if (validClosings.includes(character)) {
      const lastOpening = charStack.pop();
      if (!lastOpening || character !== validChars[lastOpening]) {
        return false;
      }
    }
  }
  return charStack.length === 0;

  // Your solution here
};

//https://skilled.dev/course/valid-brackets

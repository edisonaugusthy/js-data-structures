/**
 * @param {List[str]} emails
 * @return {str}
 */
const findHackerEmail = (emails) => {
  const repeatMap = new Map();
  let highestCount = 0;
  let hacker = null;

  for (const email of emails) {
    if (repeatMap.has(email)) {
      repeatMap.set(email, repeatMap.get(email) + 1);
    } else {
      repeatMap.set(email, 1);
    }
    if (repeatMap.get(email) > highestCount) {
      highestCount = repeatMap.get(email);
      hacker = email;
    }
  }
  return hacker;
};

const emails = [
  "a@gmail.com",
  "hey@skilled.dev",
  "b@yahoo.com",
  "b@yahoo.com",
  "b@yahoo.com",
  "hey@skilled.dev",
];
console.log(findHackerEmail(emails));
// for more :=> https://skilled.dev/course/catch-the-hacker

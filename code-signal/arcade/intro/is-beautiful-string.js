/* Intro - 43
A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter in the alphabet within the string; ie: b occurs no more times than a; c occurs no more times than b; etc. Note that letter a has no previous letter.

Given a string, check whether it is beautiful.

Example

For inputString = "bbbaacdafe", the output should be solution(inputString) = true.

This string contains 3 as, 3 bs, 1 c, 1 d, 1 e, and 1 f (and 0 of every other letter), so since there aren't any letters that appear more frequently than the previous letter, this string qualifies as beautiful.

For inputString = "aabbb", the output should be solution(inputString) = false.

Since there are more bs than as, this string is not beautiful.

For inputString = "bbc", the output should be solution(inputString) = false.

Although there are more bs than cs, this string is not beautiful because there are no as, so therefore there are more bs than as.

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A string of lowercase English letters.

Guaranteed constraints:
3 ≤ inputString.length ≤ 50.

[output] boolean

Return true if the string is beautiful, false otherwise.
*/

function solution(inputString) {
  const charCount = [...inputString].sort().reduce((av, cv) => {
    av[cv] ? av[cv]++ : (av[cv] = 1);
    return av;
  }, {});
  const entries = Object.entries(charCount);
  if (!entries[0][0].startsWith('a')) {
    return false;
  }
  for (let i = 0; i < entries.length - 1; i++) {
    const currentChar = entries[i][0];
    const currentCharCount = entries[i][1];
    const nextChar = entries[i + 1][0];
    const nextCharCount = entries[i + 1][1];
    if (nextChar.charCodeAt(0) - currentChar.charCodeAt(0) > 1) {
      return false;
    }
    if (nextCharCount > currentCharCount) {
      return false;
    }
  }
  return true;
}

console.log(solution('bbbaacdafe')); // true
console.log(solution('aabbb')); // false
console.log(solution('bbc')); // false
console.log(solution('bbbaa')); // false

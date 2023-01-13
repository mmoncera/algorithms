/* Intro - 28
Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

Example

For inputString = "crazy", the output should be solution(inputString) = "dsbaz".

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A non-empty string consisting of lowercase English characters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 1000.

[output] string

The resulting string after replacing each of its characters.
*/

function solution(inputString) {
  return [...inputString].reduce(
    (av, cv) =>
      cv === 'z' ? av + 'a' : av + String.fromCharCode(cv.charCodeAt() + 1),
    ''
  );
}

console.log(solution('crazy')); // dsbaz
console.log(solution('z')); // a
console.log(solution('aaaabbbccd')); // bbbbcccdde
console.log(solution('fuzzy')); // gvaaz

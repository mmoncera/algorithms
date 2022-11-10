/* Intro - 18
Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
solution(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 50.

[output] boolean

true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.
*/

function solution(inputString) {
  const letters = [...inputString].reduce((previous, current) => {
    if (!previous[current]) {
      previous[current] = 1;
    } else {
      previous[current]++;
    }
    return previous;
  }, {});

  const values = Object.values(letters);
  let even = 0;

  values.forEach((value) => {
    if (value % 2 === 0) {
      even++;
    }
  });

  if (even === values.length - 1 || even === values.length) {
    return true;
  }

  return false;
}

console.log(solution('aabb')); // true
console.log(solution('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc')); // false
console.log(solution('abbcabb')); // true
console.log(solution('zyyzzzzz')); // true

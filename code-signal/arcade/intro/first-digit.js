/* Intro - 35
Find the leftmost digit that occurs in a given string.

Example

For inputString = "var_1__Int", the output should be
solution(inputString) = '1';
For inputString = "q2q-q", the output should be
solution(inputString) = '2';
For inputString = "0ss", the output should be
solution(inputString) = '0'.
Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A string containing at least one digit.

Guaranteed constraints:
3 ≤ inputString.length ≤ 10.

[output] char
*/

function solution(inputString) {
  const regex = new RegExp('\\d', 'g');
  regex.test(inputString);
  return inputString[regex.lastIndex - 1];
}

console.log(solution('var_1__Int')); // '1'
console.log(solution('q2q-q')); // '2'
console.log(solution('0ss')); // '0'
console.log(solution('_Aas_23')); // '2'

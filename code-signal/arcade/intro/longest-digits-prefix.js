/* Intro - 40
Given a string, output its longest prefix which contains only digits.

Example

For inputString = "123aa1", the output should be
solution(inputString) = "123".

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

Guaranteed constraints:
3 ≤ inputString.length ≤ 100.

[output] string
*/

function solution(inputString) {
  return inputString.match(/^\d+/) ? inputString.match(/^\d+/)[0] : '';
}

console.log(solution('123aa1')); // '123'
console.log(solution('0123456789')); // '0123456789'
console.log(solution('  3) always check for whitespaces')); // ''
console.log(solution('12abc34')); // '12'

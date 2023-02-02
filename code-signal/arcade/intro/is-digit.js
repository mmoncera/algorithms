/* Intro - 48
Determine if the given character is a digit or not.

Example

For symbol = '0', the output should be
solution(symbol) = true;
For symbol = '-', the output should be
solution(symbol) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] char symbol

A character which is either a digit or not.

Guaranteed constraints:
Given symbol is from ASCII table.

[output] boolean

true if symbol is a digit, false otherwise.
*/

function solution(symbol) {
  return !isNaN(+symbol);
}

console.log(solution('0')); // true
console.log(solution('-')); // false
console.log(solution('O')); // false
console.log(solution('1')); // true

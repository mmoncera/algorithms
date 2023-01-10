/* Intro - 26
Check if all digits of the given integer are even.

Example

For n = 248622, the output should be
solution(n) = true;
For n = 642386, the output should be
solution(n) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
1 ≤ n ≤ 109.

[output] boolean

true if all digits of n are even, false otherwise.
*/

function solution(n) {
  return [...String(n)].every((val) => +val % 2 === 0);
}

console.log(solution(248622)); // true
console.log(solution(642386)); // false
console.log(solution(248842)); // true
console.log(solution(1)); // false

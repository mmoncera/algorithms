/* The Core - 2
Given an integer n, return the largest number that contains exactly n digits.

Example

For n = 2, the output should be
solution(n) = 99.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
1 ≤ n ≤ 9.

[output] integer

The largest integer of length n.
*/

function solution(n) {
  return +Array(n).fill(9).join('');
}

console.log(solution(2)); // 99
console.log(solution(1)); // 9
console.log(solution(7)); // 9999999
console.log(solution(3)); // 999

/* Intro - 30
Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

Example

For n = 10 and firstNumber = 2, the output should be
solution(n, firstNumber) = 7.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A positive even integer.

Guaranteed constraints:
4 ≤ n ≤ 20.

[input] integer firstNumber

Guaranteed constraints:
0 ≤ firstNumber ≤ n - 1.

[output] integer
*/

function solution(n, firstNumber) {
  const quotient = Math.floor(n / 2);
  return quotient <= firstNumber
    ? firstNumber - quotient
    : firstNumber + quotient;
}

console.log(solution(10, 2)); // 7
console.log(solution(10, 7)); // 2
console.log(solution(4, 1)); // 3
console.log(solution(6, 3)); // 0

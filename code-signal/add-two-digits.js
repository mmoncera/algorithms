/* The Core - 1
You are given a two-digit integer n. Return the sum of its digits.

Example

For n = 29, the output should be
solution(n) = 11.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A positive two-digit integer.

Guaranteed constraints:
10 ≤ n ≤ 99.

[output] integer

The sum of the first and second digits of the input number.
*/

function solution(n) {
  return [...String(n)].reduce(
    (previousValue, currentValue) => +previousValue + +currentValue
  );
}

console.log(solution(29)); // 11
console.log(solution(48)); // 12
console.log(solution(10)); // 1
console.log(solution(25)); // 7

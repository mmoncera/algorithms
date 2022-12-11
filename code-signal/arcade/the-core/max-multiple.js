/* The Core - 5
Given a divisor and a bound, find the largest integer N such that:

N is divisible by divisor.
N is less than or equal to bound.
N is greater than 0.
It is guaranteed that such a number exists.

Example

For divisor = 3 and bound = 10, the output should be
solution(divisor, bound) = 9.

The largest integer divisible by 3 and not larger than 10 is 9.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer divisor

Guaranteed constraints:
2 ≤ divisor ≤ 10.

[input] integer bound

Guaranteed constraints:
5 ≤ bound ≤ 100.

[output] integer

The largest integer not greater than bound that is divisible by divisor.
*/

function solution(divisor, bound) {
  while (bound % divisor !== 0) {
    bound--;
  }
  return bound;
}

console.log(solution(3, 10)); // 3
console.log(solution(2, 7)); // 6
console.log(solution(10, 50)); // 50
console.log(solution(7, 100)); // 98

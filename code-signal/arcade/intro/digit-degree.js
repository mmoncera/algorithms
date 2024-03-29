/* Intro - 41
Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

Given an integer, find its digit degree.

Example

For n = 5, the output should be
solution(n) = 0;
For n = 100, the output should be
solution(n) = 1.
1 + 0 + 0 = 1.
For n = 91, the output should be
solution(n) = 2.
9 + 1 = 10 -> 1 + 0 = 1.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
5 ≤ n ≤ 109.

[output] integer
*/

function solution(n) {
  let count = 0;
  let numbers = [...String(n)];
  while (numbers.length > 1) {
    count++;
    numbers = [...String(numbers.reduce((av, cv) => +av + +cv))];
  }
  return count;
}

console.log(solution(5)); // 0
console.log(solution(100)); // 1
console.log(solution(91)); // 2
console.log(solution(99)); // 2

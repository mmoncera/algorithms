/* Intro - 51
Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example

For n = 152, the output should be
solution(n) = 52;
For n = 1001, the output should be
solution(n) = 101.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
10 ≤ n ≤ 106.

[output] integer
*/

function solution(n) {
  const numbers = [...String(n)];
  let maxNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    let deletedNumber = numbers.slice();
    deletedNumber.splice(i, 1);
    deletedNumber = +deletedNumber.join('');
    maxNumber = Math.max(maxNumber, deletedNumber);
  }
  return maxNumber;
}

console.log(solution(152)); // 52
console.log(solution(1001)); // 101
console.log(solution(10)); // 1
console.log(solution(222219)); // 22229

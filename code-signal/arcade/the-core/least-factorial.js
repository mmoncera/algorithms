/* The Core - 25
Given an integer n, find the minimal k such that

k = m! (where m! = 1 * 2 * ... * m) for some integer m;
k >= n.
In other words, find the smallest factorial which is not less than n.

Example

For n = 17, the output should be
solution(n) = 24.

17 < 24 = 4! = 1 * 2 * 3 * 4, while 3! = 1 * 2 * 3 = 6 < 17).

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A positive integer.

Guaranteed constraints:
1 ≤ n ≤ 120.

[output] integer
*/

function solution(n) {
  let k = 1;
  for (let i = 1; n > k; i++) {
    k += k * i;
  }
  return k;
}

console.log(solution(17)); // 24
console.log(solution(1)); // 1
console.log(solution(5)); // 6
console.log(solution(25)); // 120

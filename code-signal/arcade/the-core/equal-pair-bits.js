/* The Core - 24
Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
You're given two integers, n and m. Find position of the rightmost pair of equal bits in their binary representations (it is guaranteed that such a pair exists), counting from right to left.

Return the value of 2position_of_the_found_pair (0-based).

Example

For n = 10 and m = 11, the output should be
solution(n, m) = 2.

1010 = 10102, 1110 = 10112, the position of the rightmost pair of equal bits is the bit at position 1 (0-based) from the right in the binary representations.
So the answer is 21 = 2.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
0 ≤ n ≤ 230.

[input] integer m

Guaranteed constraints:
0 ≤ m ≤ 230.

[output] integer
*/

function solution(n, m) {
  return [n, m].reduce((av, cv) => {
    let padding;
    av = av.toString(2).padStart(32, '0');
    cv = cv.toString(2).padStart(32, '0');
    [...av].forEach((bit, i) => {
      if (bit === cv[i]) {
        padding = i;
      }
    });
    return parseInt('1'.padEnd(32 - padding, '0'), 2);
  });
}

console.log(solution(10, 11)); // 2
console.log(solution(0, 0)); // 1
console.log(solution(28, 27)); // 8
console.log(solution(895, 928)); // 32

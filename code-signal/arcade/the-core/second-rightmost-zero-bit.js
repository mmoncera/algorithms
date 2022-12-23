/* The Core - 21
Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
Presented with the integer n, find the 0-based position of the second rightmost zero bit in its binary representation (it is guaranteed that such a bit exists), counting from right to left.

Return the value of 2position_of_the_found_bit.

Example

For n = 37, the output should be
solution(n) = 8.

3710 = 1001012. The second rightmost zero bit is at position 3 (0-based) from the right in the binary representation of n.
Thus, the answer is 23 = 8.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
4 ≤ n ≤ 230.

[output] integer
*/

function solution(n) {
  return (
    2 **
    [...n.toString(2)].reverse().reduce(
      (a, cv, i, array) => {
        if (+cv === 0 && a.count < 2) {
          a.count += 1;
          if (a.count === 2) {
            a.index = i;
          }
        }
        return a;
      },
      { count: 0, index: 0 }
    ).index
  );
}

console.log(solution(37)); // 8
console.log(solution(1073741824)); // 2
console.log(solution(83748)); // 2
console.log(solution(4)); // 2

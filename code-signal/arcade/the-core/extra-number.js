/* The Core - 11
You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?

Example

For a = 2, b = 7, and c = 2, the output should be
solution(a, b, c) = 7.

The two equal numbers are a and c. The third number (b) equals 7, which is the answer.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer a

Guaranteed constraints:
1 ≤ a ≤ 109.

[input] integer b

Guaranteed constraints:
1 ≤ b ≤ 109.

[input] integer c

Guaranteed constraints:
1 ≤ c ≤ 109.

[output] integer
*/

function solution(a, b, c) {
  if (a - b === 0) {
    return c;
  }
  if (a - c === 0) {
    return b;
  }
  return a;
}

console.log(solution(2, 7, 2)); // 7
console.log(solution(3, 2, 2)); // 3
console.log(solution(5, 5, 1)); // 1
console.log(solution(500000000, 3, 500000000)); // 3

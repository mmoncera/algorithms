/* The Core - 20
Reverse the order of the bits in a given integer.

Example

For a = 97, the output should be
solution(a) = 67.

97 equals to 1100001 in binary, which is 1000011 after mirroring, and that is 67 in base 10.

For a = 8, the output should be
solution(a) = 1.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer a

Guaranteed constraints:
5 ≤ a ≤ 105.

[output] integer
*/

function solution(a) {
  return parseInt([...a.toString(2)].reverse().join(''), 2);
}

console.log(solution(97)); // 67
console.log(solution(8)); // 1
console.log(solution(123)); // 111
console.log(solution(86782)); // 65173

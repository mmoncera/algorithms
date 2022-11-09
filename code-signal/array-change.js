/* Intro - 17
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be
solution(inputArray) = 3.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Guaranteed constraints:
3 ≤ inputArray.length ≤ 105,
-105 ≤ inputArray[i] ≤ 105.

[output] integer

The minimal number of moves needed to obtain a strictly increasing sequence from inputArray.
It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.
*/

function solution(inputArray) {
  let increase = 0;
  for (let i = 0; i < inputArray.length; i++) {
    const current = inputArray[i];
    const next = inputArray[i + 1];
    if (current >= next) {
      let diff = current - next;
      inputArray[i + 1] = current + 1;
      increase += diff + 1;
    }
  }
  return increase;
}

console.log(solution([1, 1, 1])); // 3
console.log(solution([-1000, 0, -2, 0])); // 5
console.log(solution([2, 1, 10, 1])); // 12
console.log(solution([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15])); // 13

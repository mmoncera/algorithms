/* Intro - 20
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
solution(inputArray) = 3.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Guaranteed constraints:
3 ≤ inputArray.length ≤ 10,
-15 ≤ inputArray[i] ≤ 15.

[output] integer

The maximal absolute difference.
*/

function solution(inputArray) {
  let maxDiff = 0;
  for (let index = 0; index < inputArray.length - 1; index++) {
    const difference = Math.abs(inputArray[index] - inputArray[index + 1]);
    if (difference > maxDiff) {
      maxDiff = difference;
    }
  }
  return maxDiff;
}

console.log(solution([2, 4, 1, 0])); // 3
console.log(solution([1, 1, 1, 1])); // 0
console.log(solution([-1, 4, 10, 3, -2])); // 7
console.log(solution([10, 11, 13])); // 2

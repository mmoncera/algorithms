/* Intro - 22
You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

Example

For inputArray = [5, 3, 6, 7, 9], the output should be
solution(inputArray) = 4.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Non-empty array of positive integers.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 1000,
1 ≤ inputArray[i] ≤ 1000.

[output] integer

The desired length.
*/

function solution(inputArray) {
  inputArray.sort((a, b) => a - b);
  let all = false;
  let minJump = 2;
  while (all === false) {
    all = inputArray.every((value) => {
      const remainder = value % minJump;
      if (remainder === 0) {
        return false;
      }
      const quotient = Math.floor(value / minJump);
      const product = quotient * minJump;
      const sum = product + minJump;
      return !inputArray.includes(sum);
    });
    if (all === true) {
      return minJump;
    }
    minJump++;
  }
}

console.log(solution([5, 3, 6, 7, 9])); // 4
console.log(solution([2, 3])); // 4
console.log(solution([1, 4, 10, 6, 2])); // 7
console.log(solution([1000, 999])); // 6

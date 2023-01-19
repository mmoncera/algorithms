/* Intro - 34
Given array of integers, remove each kth element from it.

Example

For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
solution(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Guaranteed constraints:
5 ≤ inputArray.length ≤ 15,
-20 ≤ inputArray[i] ≤ 20.

[input] integer k

Guaranteed constraints:
1 ≤ k ≤ 10.

[output] array.integer

inputArray without elements k - 1, 2k - 1, 3k - 1 etc.
*/

function solution(inputArray, k) {
  const removed = [];
  for (let i = 0, j = 1; i < inputArray.length; i += k, j++) {
    removed.push(...inputArray.slice(i, k * j - 1));
  }
  return removed;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // [1, 2, 4, 5, 7, 8, 10]
console.log(solution([1, 1, 1, 1, 1], 1)); // []
console.log(solution([1, 2, 1, 2, 1, 2, 1, 2], 2)); // [1, 1, 1, 1]
console.log(solution([1, 2, 1, 2, 1, 2, 1, 2], 10)); // [1, 2, 1, 2, 1, 2, 1, 2]

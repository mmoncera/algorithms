/* Intro - 37
Given array of integers, find the maximal possible sum of some of its k consecutive elements.

Example

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
solution(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:

2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8.
Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Array of positive integers.

Guaranteed constraints:
3 ≤ inputArray.length ≤ 105,
1 ≤ inputArray[i] ≤ 1000.

[input] integer k

An integer (not greater than the length of inputArray).

Guaranteed constraints:
1 ≤ k ≤ inputArray.length.

[output] integer

The maximal possible sum.
*/

function solution(inputArray, k) {
  const firstSum = inputArray.slice(0, k).reduce((av, cv) => av + cv);
  const sums = [firstSum];
  for (let i = 1; i <= inputArray.length - k; i++) {
    const prevNum = inputArray[i - 1];
    const lastNum = inputArray[i - 1 + k];
    const sum = sums[i - 1] - prevNum + lastNum;
    sums.push(sum);
  }
  return Math.max(...sums);
}

console.log(solution([2, 3, 5, 1, 6], 2)); // 8
console.log(solution([2, 4, 10, 1], 2)); // 14
console.log(solution([1, 3, 2, 4], 3)); // 9
console.log(solution([3, 2, 1, 1], 1)); // 3

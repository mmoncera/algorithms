/* Intro - 4
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
solution(inputArray) = 21.

7 and 3 produce the largest product.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

An array of integers containing at least two elements.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
-1000 ≤ inputArray[i] ≤ 1000.

[output] integer

The largest product of adjacent elements.
*/

function solution(inputArray) {
  var largestProduct = inputArray[0] * inputArray[1];
  for (var i = 1; i < inputArray.length - 1; i++) {
    var product = inputArray[i] * inputArray[i + 1];
    if (product > largestProduct) {
      largestProduct = product;
    }
  }
  return largestProduct;
}

console.log(solution([3, 6, -2, -5, 7, 3])); // 21
console.log(solution([-1, -2])); // 2
console.log(solution([5, 1, 2, 3, 1, 4])); // 6
console.log(solution([1, 2, 3, 0])); // 6

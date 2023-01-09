/* Intro - 25
Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

Example

For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, the output should be
solution(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Guaranteed constraints:
0 ≤ inputArray.length ≤ 104,
0 ≤ inputArray[i] ≤ 109.

[input] integer elemToReplace

Guaranteed constraints:
0 ≤ elemToReplace ≤ 109.

[input] integer substitutionElem

Guaranteed constraints:
0 ≤ substitutionElem ≤ 109.

[output] array.integer
*/

function solution(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map((val) =>
    val === elemToReplace ? substitutionElem : val
  );
}

console.log(solution([1, 2, 1], 1, 3)); // [3, 2, 3]
console.log(solution([1, 2, 3, 4, 5], 3, 0)); // [1, 2, 0, 4, 5]
console.log(solution([1, 1, 1], 1, 10)); // [10, 10, 10]
console.log(solution([1, 2, 1, 2, 1], 2, 1)); // [1, 1, 1, 1, 1]

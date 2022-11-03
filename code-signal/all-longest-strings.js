/* Intro - 9
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
solution(inputArray) = ["aba", "vcd", "aba"].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string inputArray

A non-empty array.

Guaranteed constraints:
1 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 10.

[output] array.string

Array of the longest strings, stored in the same order as in the inputArray.
*/

function solution(inputArray) {
  var longestLength = inputArray
    .slice()
    .sort((a, b) => a.length - b.length)
    .pop().length;

  return inputArray.filter((value) => value.length === longestLength);
}

console.log(solution(['aba', 'aa', 'ad', 'vcd', 'aba'])); // ["aba", "vcd", "aba"]
console.log(solution(['aa'])); // ["aa"]
console.log(solution(['abc', 'eeee', 'abcd', 'dcd'])); // ["eeee", "abcd"]
console.log(
  solution(['a', 'abc', 'cbd', 'zzzzzz', 'a', 'abcdef', 'asasa', 'aaaaaa'])
); // ["zzzzzz", "abcdef", "aaaaaa"]

/* Intro - 52
Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

Example

For text = "Ready, steady, go!", the output should be
solution(text) = "steady".

Input/Output

[execution time limit] 4 seconds (js)

[input] string text

Guaranteed constraints:
4 ≤ text.length ≤ 50.

[output] string

The longest word from text. It's guaranteed that there is a unique output.
*/

function solution(text) {
  return text
    .match(/[a-zA-Z^]*/g)
    .sort((a, b) => a.length - b.length)
    .pop();
}

console.log(solution('Ready, steady, go!')); // 'steady'
console.log(solution('Ready[[[, steady, go!')); // 'steady'
console.log(solution('ABCd')); // 'ABCd'
console.log(solution('To be or not to be')); // 'not'

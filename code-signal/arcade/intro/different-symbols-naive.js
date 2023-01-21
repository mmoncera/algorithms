/* Intro - 36
Given a string, find the number of different characters in it.

Example

For s = "cabca", the output should be
solution(s) = 3.

There are 3 different characters a, b and c.

Input/Output

[execution time limit] 4 seconds (js)

[input] string s

A string of lowercase English letters.

Guaranteed constraints:
3 ≤ s.length ≤ 1000.

[output] integer
*/

function solution(s) {
  return Object.keys(
    [...s].reduce((av, cv) => {
      av[cv] ? av[cv]++ : (av[cv] = 1);
      return av;
    }, {})
  ).length;
}

console.log(solution('cabca')); // 3
console.log(solution('aba')); // 2
console.log(solution('ccccccccccc')); // 1
console.log(solution('bcaba')); // 3

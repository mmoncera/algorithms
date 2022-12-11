/* Intro - 6
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
solution(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer statues

An array of distinct non-negative integers.

Guaranteed constraints:
1 ≤ statues.length ≤ 10,
0 ≤ statues[i] ≤ 20.

[output] integer

The minimal number of statues that need to be added to existing statues such that it contains every integer size from an interval [L, R] (for some L, R) and no other sizes.
*/

function solution(statues) {
  var sorted = statues.sort((a, b) => a - b);
  var additionalStatues = 0;
  for (var i = 0; i < statues.length - 1; i++) {
    var difference = statues[i + 1] - statues[i] - 1;
    if (difference > 0) {
      additionalStatues += difference;
    }
  }
  return additionalStatues;
}

console.log(solution([6, 2, 3, 8])); // 3
console.log(solution([0, 3])); // 2
console.log(solution([5, 4, 6])); // 0
console.log(solution([6, 3])); // 2

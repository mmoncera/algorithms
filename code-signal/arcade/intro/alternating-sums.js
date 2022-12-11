/* Intro - 14
Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

Example

For a = [50, 60, 60, 45, 70], the output should be
solution(a) = [180, 105].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

Guaranteed constraints:
1 ≤ a.length ≤ 105,
45 ≤ a[i] ≤ 100.

[output] array.integer
*/

function solution(a) {
  if (a.length === 1) {
    return a.concat(0);
  }

  var team1 = a.filter((value, i) => i % 2 === 0).reduce((av, cv) => av + cv);
  var team2 = a.filter((value, i) => i % 2 !== 0).reduce((av, cv) => av + cv);

  return [team1, team2];
}

console.log(solution([50, 60, 60, 45, 70])); // [180, 105]
console.log(solution([100, 50])); // [100, 50]
console.log(solution([80])); // [80, 0]
console.log(solution([100, 50, 50, 100])); // [150, 150]

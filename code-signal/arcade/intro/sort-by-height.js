/* Intro - 12
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.

Guaranteed constraints:
1 ≤ a.length ≤ 1000,
-1 ≤ a[i] ≤ 1000.

[output] array.integer

Sorted array a with all the trees untouched.
*/

function solution(a) {
  let heights = a.filter((value) => value > -1).sort((a, b) => a - b);
  return a.map((value) => {
    if (value > -1) {
      return (value = heights.shift());
    } else {
      return value;
    }
  });
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180])); // [-1, 150, 160, 170, -1, -1, 180, 190]
console.log(solution([-1, -1, -1, -1, -1])); // [-1, -1, -1, -1, -1]
console.log(solution([-1])); // [-1]
console.log(solution([4, 2, 9, 11, 2, 16])); // [2, 2, 4, 9, 11, 16]

/* Intro - 29
Given two cells on the standard chess board, determine whether they have the same color or not.

Example

For cell1 = "A1" and cell2 = "C3", the output should be
solution(cell1, cell2) = true.

For cell1 = "A1" and cell2 = "H3", the output should be
solution(cell1, cell2) = false.

Input/Output

[execution time limit] 4 seconds (js)

[input] string cell1

Guaranteed constraints:
cell1.length = 2,
'A' ≤ cell1[0] ≤ 'H',
1 ≤ cell1[1] ≤ 8.

[input] string cell2

Guaranteed constraints:
cell2.length = 2,
'A' ≤ cell2[0] ≤ 'H',
1 ≤ cell2[1] ≤ 8.

[output] boolean

true if both cells have the same color, false otherwise.
*/

function solution(cell1, cell2) {
  const board = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8
  };

  return (
    (board[cell1[0]] + +cell1[1]) % 2 === (board[cell2[0]] + +cell2[1]) % 2
  );
}

console.log(solution('A1', 'C3')); // true
console.log(solution('A1', 'H3')); // false
console.log(solution('A1', 'A2')); // false
console.log(solution('A1', 'B2')); // true

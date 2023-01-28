/* Intro - 42
Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:

Example

For bishop = "a1" and pawn = "c3", the output should be
solution(bishop, pawn) = true.

For bishop = "h1" and pawn = "h3", the output should be
solution(bishop, pawn) = false.

Input/Output

[execution time limit] 4 seconds (js)

[input] string bishop

Coordinates of the white bishop in the chess notation.

Guaranteed constraints:
bishop.length = 2,
'a' ≤ bishop[0] ≤ 'h',
1 ≤ bishop[1] ≤ 8.

[input] string pawn

Coordinates of the black pawn in the same notation.

Guaranteed constraints:
pawn.length = 2,
'a' ≤ pawn[0] ≤ 'h',
1 ≤ pawn[1] ≤ 8.

[output] boolean

true if the bishop can capture the pawn, false otherwise.
*/

function solution(bishop, pawn) {
  const bishopCol = bishop.charCodeAt(0);
  const bishopRow = +bishop[1];
  const pawnCol = pawn.charCodeAt(0);
  const pawnRow = +pawn[1];
  if (bishopCol > pawnCol && bishopRow > pawnRow) {
    return bishopCol - pawnCol === bishopRow - pawnRow;
  }
  if (bishopCol > pawnCol && bishopRow < pawnRow) {
    return bishopCol + bishopRow === pawnCol + pawnRow;
  }
  if (bishopCol < pawnCol && bishopRow < pawnRow) {
    return pawnCol - bishopCol === pawnRow - bishopRow;
  }
  if (bishopCol < pawnCol && bishopRow > pawnRow) {
    return bishopCol + bishopRow === pawnCol + pawnRow;
  }
  return false;
}

console.log(solution('a1', 'c3')); // true
console.log(solution('h1', 'h3')); // false
console.log(solution('a5', 'c3')); // true
console.log(solution('g1', 'f3')); // false

/* Intro - 50
Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

Example

For cell = "a1", the output should be
solution(cell) = 2.

For cell = "c2", the output should be
solution(cell) = 6.

Input/Output

[execution time limit] 4 seconds (js)

[input] string cell

String consisting of 2 letters - coordinates of the knight on an 8 × 8 chessboard in chess notation.

Guaranteed constraints:
cell.length = 2,
'a' ≤ cell[0] ≤ 'h',
1 ≤ cell[1] ≤ 8.

[output] integer
*/

function solution(cell) {
  const [letter, number] = cell;
  const letterRight1 = String.fromCharCode(letter.charCodeAt(0) + 1);
  const letterRight2 = String.fromCharCode(letter.charCodeAt(0) + 2);
  const letterLeft1 = String.fromCharCode(letter.charCodeAt(0) - 1);
  const letterLeft2 = String.fromCharCode(letter.charCodeAt(0) - 2);
  const numberPlus1 = +number + 1;
  const numberPlus2 = +number + 2;
  const numberMinus1 = +number - 1;
  const numberMinus2 = +number - 2;
  let count = 0;
  if (checkValidPosition(letterRight1, numberPlus2)) {
    count++;
  }
  if (checkValidPosition(letterRight1, numberMinus2)) {
    count++;
  }
  if (checkValidPosition(letterRight2, numberPlus1)) {
    count++;
  }
  if (checkValidPosition(letterRight2, numberMinus1)) {
    count++;
  }
  if (checkValidPosition(letterLeft1, numberPlus2)) {
    count++;
  }
  if (checkValidPosition(letterLeft1, numberMinus2)) {
    count++;
  }
  if (checkValidPosition(letterLeft2, numberPlus1)) {
    count++;
  }
  if (checkValidPosition(letterLeft2, numberMinus1)) {
    count++;
  }
  return count;
}

function checkValidPosition(letter, number) {
  return letter >= 'a' && letter <= 'h' && number >= 1 && number <= 8;
}

console.log(solution('a1')); // 2
console.log(solution('c2')); // 6
console.log(solution('d4')); // 8
console.log(solution('g6')); // 6

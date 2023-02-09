/* Intro - 55
Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

Example

For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
the output should be
solution(matrix) = 6.

Here are all 6 different 2 × 2 squares:

1 2
2 2
2 1
2 2
2 2
2 2
2 2
1 2
2 2
2 3
2 3
2 1
Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer matrix

Guaranteed constraints:
1 ≤ matrix.length ≤ 100,
1 ≤ matrix[i].length ≤ 100,
0 ≤ matrix[i][j] ≤ 9.

[output] integer

The number of different 2 × 2 squares in matrix.
*/

function solution(matrix) {
  const uniqueSquares = new Set();
  for (let i = 0; i < matrix.length - 1; i++) {
    const topRow = matrix[i];
    const bottomRow = matrix[i + 1];
    for (let j = 0; j < topRow.length - 1; j++) {
      const square = getSquare(topRow, j) + getSquare(bottomRow, j);
      uniqueSquares.add(square);
    }
  }
  return uniqueSquares.size;
}

function getSquare(row, index) {
  return row.slice(index, index + 2).join('');
}

console.log(
  solution([
    [1, 2, 1],
    [2, 2, 2],
    [2, 2, 2],
    [1, 2, 3],
    [2, 2, 1]
  ])
); // 6
console.log(
  solution([
    [9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9]
  ])
); // 1
console.log(solution([[3]])); // 0
console.log(solution([[3, 4, 5, 6, 7, 8, 9]])); // 0

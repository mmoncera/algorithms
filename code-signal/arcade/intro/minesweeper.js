/* Intro - 24
In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

solution(matrix) = [[1, 2, 1],
                    [2, 1, 1],
                    [1, 1, 1]]
Check out the image below for better understanding:

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.boolean matrix

A non-empty rectangular matrix consisting of boolean values - true if the corresponding cell contains a mine, false otherwise.

Guaranteed constraints:
2 ≤ matrix.length ≤ 100,
2 ≤ matrix[0].length ≤ 100.

[output] array.array.integer

Rectangular matrix of the same size as matrix each cell of which contains an integer equal to the number of mines in the neighboring cells. Two cells are called neighboring if they share at least one corner.
*/

function solution(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i];
    const row = [];
    for (let j = 0; j < element.length; j++) {
      let totalMines = 0;
      if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][j - 1] === true) {
          totalMines++;
        }
        if (matrix[i - 1][j] === true) {
          totalMines++;
        }
        if (matrix[i - 1][j + 1] === true) {
          totalMines++;
        }
      }
      if (matrix[i][j - 1] === true) {
        totalMines++;
      }
      if (matrix[i][j + 1] === true) {
        totalMines++;
      }
      if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][j - 1] === true) {
          totalMines++;
        }
        if (matrix[i + 1][j] === true) {
          totalMines++;
        }
        if (matrix[i + 1][j + 1] === true) {
          totalMines++;
        }
      }
      row.push(totalMines);
    }
    result.push(row);
  }
  return result;
}

console.log(
  solution([
    [true, false, false],
    [false, true, false],
    [false, false, false]
  ])
);
/*
[
  [1,2,1],
  [2,1,1],
  [1,1,1]
]
*/
console.log(
  solution([
    [false, false, false],
    [false, false, false]
  ])
);
/*
[
  [0, 0, 0],
  [0, 0, 0]
]
*/
console.log(
  solution([
    [true, false, false, true],
    [false, false, true, false],
    [true, true, false, true]
  ])
);
/*
[
  [0, 2, 2, 1],
  [3, 4, 3, 3],
  [1, 2, 3, 1]
]
*/
console.log(
  solution([
    [true, true, true],
    [true, true, true],
    [true, true, true]
  ])
);
/*
[
  [3, 5, 3],
  [5, 8, 5],
  [3, 5, 3]
]
*/

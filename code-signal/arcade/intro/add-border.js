/* Intro - 15
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

solution(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
Input/Output

[execution time limit] 4 seconds (js)

[input] array.string picture

A non-empty array of non-empty equal-length strings.

Guaranteed constraints:
1 ≤ picture.length ≤ 100,
1 ≤ picture[i].length ≤ 100.

[output] array.string

The same matrix of characters, framed with a border of asterisks of width 1.
*/

function solution(picture) {
  for (let i = 0; i < picture.length; i++) {
    let element = picture[i];
    picture[i] = '*' + element + '*';
  }

  var startEnd = Array(picture[0].length).fill('*').join('');

  picture.unshift(startEnd);
  picture.push(startEnd);

  return picture;
}

console.log(solution(['abc', 'ded'])); // ['*****', '*abc*', '*ded*', '*****']
console.log(solution(['a'])); // ['***', '*a*', '***']
console.log(solution(['aa', '**', 'zz'])); // ['****', '*aa*', '****', '*zz*', '****']
console.log(solution(['abcde', 'fghij', 'klmno', 'pqrst', 'uvwxy'])); // ['*******', '*abcde*', '*fghij*', '*klmno*', '*pqrst*', '*uvwxy*', '*******']

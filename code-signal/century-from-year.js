/* Intro - 2
Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

Example

For year = 1905, the output should be
solution(year) = 20;
For year = 1700, the output should be
solution(year) = 17.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer year

A positive integer, designating the year.

Guaranteed constraints:
1 ≤ year ≤ 2005.

[output] integer

The number of the century the year is in.
*/

function solution(year) {
  var century = year / 10;

  if (century <= 10) {
    return 1;
  }
  if (century <= 20) {
    return 2;
  }
  if (century <= 30) {
    return 3;
  }
  if (century <= 40) {
    return 4;
  }
  if (century <= 50) {
    return 5;
  }
  if (century <= 60) {
    return 6;
  }
  if (century <= 70) {
    return 7;
  }
  if (century <= 80) {
    return 8;
  }
  if (century <= 90) {
    return 9;
  }
  if (century <= 100) {
    return 10;
  }
  if (century <= 110) {
    return 11;
  }
  if (century <= 120) {
    return 12;
  }
  if (century <= 130) {
    return 13;
  }
  if (century <= 140) {
    return 14;
  }
  if (century <= 150) {
    return 15;
  }
  if (century <= 160) {
    return 16;
  }
  if (century <= 170) {
    return 17;
  }
  if (century <= 180) {
    return 18;
  }
  if (century <= 190) {
    return 19;
  }
  if (century <= 200) {
    return 20;
  }
  if (century <= 210) {
    return 21;
  }
}

console.log(solution(1995)); // 20
console.log(solution(1700)); // 17
console.log(solution(1988)); // 20
console.log(solution(2000)); // 20

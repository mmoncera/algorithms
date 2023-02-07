/* Intro - 53
Check if the given string is a correct time representation of the 24-hour clock.

Example

For time = "13:58", the output should be
solution(time) = true;
For time = "25:51", the output should be
solution(time) = false;
For time = "02:76", the output should be
solution(time) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] string time

A string representing time in HH:MM format. It is guaranteed that the first two characters, as well as the last two characters, are digits.

[output] boolean

true if the given representation is correct, false otherwise.
*/

function solution(time) {
  const [hours, minutes] = time.split(':');
  return +hours < 24 && +minutes < 60;
}

console.log(solution('13:58')); // true
console.log(solution('25:51')); // false
console.log(solution('02:76')); // false
console.log(solution('24:00')); // false

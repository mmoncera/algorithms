/* Intro - 11
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
solution(n) = true;
For n = 239017, the output should be
solution(n) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A ticket number represented as a positive integer with an even number of digits.

Guaranteed constraints:
10 ≤ n < 106.

[output] boolean

true if n is a lucky ticket number, false otherwise.
*/

function solution(n) {
  var numbers = [...String(n)];
  return (
    numbers.slice(0, numbers.length / 2).reduce((av, cv) => +av + +cv) ===
    numbers.slice(numbers.length / 2).reduce((av, cv) => +av + +cv)
  );
}

console.log(solution(1230)); // true
console.log(solution(239017)); // false
console.log(solution(134008)); // true
console.log(solution(10)); // false

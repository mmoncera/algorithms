/* Intro - 54
CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.

Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.

Example

For inputString = "2 apples, 12 oranges", the output should be
solution(inputString) = 14.

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

Guaranteed constraints:
0 ≤ inputString.length ≤ 105.

[output] integer
*/

function solution(inputString) {
  return (inputString.match(/\d+/g) || []).reduce((av, cv) => av + +cv, 0);
}

console.log(solution('2 apples, 12 oranges')); // 14
console.log(solution('123450')); // 123450
console.log(solution('Your payment method is invalid')); // 0
console.log(solution('no digits at all')); // 0

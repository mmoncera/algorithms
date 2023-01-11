/* Intro - 27
Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.

Example

For name = "var_1__Int", the output should be
solution(name) = true;
For name = "qq-q", the output should be
solution(name) = false;
For name = "2w2", the output should be
solution(name) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] string name

Guaranteed constraints:
1 ≤ name.length ≤ 10.

[output] boolean

true if name is a correct variable name, false otherwise.
*/

function solution(name) {
  return /^[a-z_](\w+)?$/i.test(name);
}

console.log(solution('var_1__Int')); // true
console.log(solution('qq-q')); // false
console.log(solution('2w2')); // false
console.log(solution(' variable')); // false

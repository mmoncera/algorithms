/* Intro - 13
Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
solution(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
solution(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
solution(inputString) = "foorabbazmilb";
For inputString = "foo(bar(baz))blim", the output should be
solution(inputString) = "foobazrabblim".
Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A string consisting of lowercase English letters and the characters ( and ). It is guaranteed that all parentheses in inputString form a regular bracket sequence.

Guaranteed constraints:
0 ≤ inputString.length ≤ 50.

[output] string

Return inputString, with all the characters that were in parentheses reversed.
*/

function solution(inputString) {
  var copy = inputString;

  while (copy.includes('(')) {
    var endBracket = copy.indexOf(')');
    var startBracket = copy.lastIndexOf('(', endBracket);
    var reversed = copy
      .slice(startBracket + 1, endBracket)
      .split('')
      .reverse()
      .join('');
    copy = copy.slice(0, startBracket) + reversed + copy.slice(endBracket + 1);
  }

  return copy;
}

console.log(solution('(bar)')); // 'rab'
console.log(solution('foo(bar)baz')); // 'foorabbaz'
console.log(solution('foo(bar)baz(blim)')); // 'foorabbazmilb'
console.log(solution('foo(bar(baz))blim')); // 'foobazrabblim'

/* Intro - 45
Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

Example

For st = "abcdc", the output should be
solution(st) = "abcdcba".

Input/Output

[execution time limit] 4 seconds (js)

[input] string st

A string consisting of lowercase English letters.

Guaranteed constraints:
3 ≤ st.length ≤ 10.

[output] string
*/

function solution(st) {
  const reversed = [...st].reverse().join('');
  if (st === reversed) {
    return st;
  }
  for (let i = 1; i < st.length; i++) {
    const slice = st.slice(i);
    const reversedSlice = [...st.slice(i)].reverse().join('');
    if (slice === reversedSlice) {
      const start = st.slice(0, i);
      const end = [...start].reverse().join('');
      return start + reversedSlice + end;
    }
  }
}

console.log(solution('abcdc')); // 'abcdcba'
console.log(solution('ababab')); // 'abababa'
console.log(solution('abba')); // 'abba'
console.log(solution('abaa')); // 'abaaba'

/* Intro - 49
Given a string, return its encoding defined as follows:

First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
for example, "aabbbc" is divided into ["aa", "bbb", "c"]
Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
for example, substring "bbb" is replaced by "3b"
Finally, all the new strings are concatenated together in the same order and a new string is returned.
Example

For s = "aabbbc", the output should be
solution(s) = "2a3bc".

Input/Output

[execution time limit] 4 seconds (js)

[input] string s

String consisting of lowercase English letters.

Guaranteed constraints:
4 ≤ s.length ≤ 15.

[output] string

Encoded version of s.
*/

function solution(s) {
  let encoded = '';
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const next = s[i + 1];
    if (current !== next) {
      count === 1 ? (encoded += current) : (encoded += count + current);
      count = 1;
    } else {
      count++;
    }
  }
  return encoded;
}

console.log(solution('aabbbc')); // '2a3bc
console.log(solution('abbcabb')); // 'a2bca2b'
console.log(solution('abcd')); // 'abcd'
console.log(solution('zzzz')); // '4z'

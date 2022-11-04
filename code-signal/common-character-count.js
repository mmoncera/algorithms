/* Intro - 10
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
solution(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

Input/Output

[execution time limit] 4 seconds (js)

[input] string s1

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s1.length < 15.

[input] string s2

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s2.length < 15.

[output] integer
*/

function solution(s1, s2) {
  var count1 = {};
  var count2 = {};
  var maxLength = Math.max(s1.length, s2.length);

  for (let i = 0; i < maxLength; i++) {
    if (s2.includes(s1[i])) {
      if (!count1[s1[i]]) {
        count1[s1[i]] = 1;
      } else {
        count1[s1[i]]++;
      }
    }
    if (s1.includes(s2[i])) {
      if (!count2[s2[i]]) {
        count2[s2[i]] = 1;
      } else {
        count2[s2[i]]++;
      }
    }
  }

  var count = 0;

  for (var key in count1) {
    count += Math.min(count1[key], count2[key]);
  }

  return count;
}

console.log(solution('aabcc', 'adcaa')); // 3
console.log(solution('zzzz', 'zzzzzzz')); // 4
console.log(solution('abca', 'xyzbac')); // 3
console.log(solution('a', 'b')); // 0

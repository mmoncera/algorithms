/* Intro - 33
Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.

Note: You're only rearranging the order of the strings, not the order of the letters within the strings!

Example

For inputArray = ["aba", "bbb", "bab"], the output should be
solution(inputArray) = false.

There are 6 possible arrangements for these strings:

["aba", "bbb", "bab"]
["aba", "bab", "bbb"]
["bbb", "aba", "bab"]
["bbb", "bab", "aba"]
["bab", "bbb", "aba"]
["bab", "aba", "bbb"]
None of these satisfy the condition of consecutive strings differing by 1 character, so the answer is false.

For inputArray = ["ab", "bb", "aa"], the output should be
solution(inputArray) = true.

It's possible to arrange these strings in a way that each consecutive pair of strings differ by 1 character (eg: "aa", "ab", "bb" or "bb", "ab", "aa"), so return true.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string inputArray

A non-empty array of strings of lowercase letters.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 15.

[output] boolean

Return true if the strings can be reordered in such a way that each neighbouring pair of strings differ by exactly one character (false otherwise).
*/

function solution(inputArray) {
  const permutations = permute(inputArray);
  for (let i = 0; i < permutations.length; i++) {
    const permutation = permutations[i];
    let differsByOne = true;
    for (let j = 0; j < permutation.length - 1; j++) {
      const currentVal = permutation[j];
      const nextVal = permutation[j + 1];
      let charDiffCount = 0;
      for (let k = 0; k < currentVal.length; k++) {
        if (currentVal[k] !== nextVal[k]) {
          charDiffCount++;
        }
      }
      if (charDiffCount !== 1) {
        differsByOne = false;
        break;
      }
    }
    if (differsByOne) {
      return true;
    }
  }
  return false;
}

function permute(array) {
  let result = [];
  if (array.length === 0) {
    return [];
  }
  if (array.length === 1) {
    return [array];
  }
  for (let i = 0; i < array.length; i++) {
    const currentVal = array[i];
    const remainingVals = array.slice(0, i).concat(array.slice(i + 1));
    const remainingValsPermuted = permute(remainingVals);
    for (let j = 0; j < remainingValsPermuted.length; j++) {
      const permutedArray = [currentVal].concat(remainingValsPermuted[j]);
      result.push(permutedArray);
    }
  }
  return result;
}

console.log(solution(['aba', 'bbb', 'bab'])); // false
console.log(solution(['ab', 'bb', 'aa'])); // true
console.log(solution(['q', 'q'])); // false
console.log(solution(['zzzzab', 'zzzzbb', 'zzzzaa'])); // true

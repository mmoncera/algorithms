/* Intro - 7
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

Example

For sequence = [1, 3, 2, 1], the output should be
solution(sequence) = false.

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
solution(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer sequence

Guaranteed constraints:
2 ≤ sequence.length ≤ 105,
-105 ≤ sequence[i] ≤ 105.

[output] boolean

Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.
*/

function solution(sequence) {
  var removed = 0;
  var copy = [...sequence];

  for (var i = sequence.length - 1; i > 0; i--) {
    var first = sequence[i];
    var second = sequence[i - 1];

    if (first <= second) {
      sequence.splice(i - 1, 1);
      removed++;
      i = sequence.length;
    }
    if (removed > 1) {
      break;
    }
  }

  if (removed === 1) {
    return true;
  } else {
    removed = 0;
  }

  for (var i = copy.length - 1; i > 0; i--) {
    var first = copy[i];
    var second = copy[i - 1];

    if (first <= second) {
      copy.splice(i, 1);
      removed++;
      i = copy.length;
    }
    if (removed > 1) {
      return false;
    }
  }

  return true;
}

console.log(solution([1, 3, 2, 1])); // false
console.log(solution([1, 3, 2])); // true
console.log(solution([1, 2, 1, 2])); // false
console.log(solution([3, 6, 5, 8, 10, 20, 15])); // false

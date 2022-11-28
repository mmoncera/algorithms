/* Intro - 21
An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

Given a string, find out if it satisfies the IPv4 address naming rules.

Example

For inputString = "172.16.254.1", the output should be
solution(inputString) = true;

For inputString = "172.316.254.1", the output should be
solution(inputString) = false.

316 is not in range [0, 255].

For inputString = ".254.255.0", the output should be
solution(inputString) = false.

There is no first number.

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A string consisting of digits, full stops and lowercase English letters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 30.

[output] boolean

true if inputString satisfies the IPv4 address naming rules, false otherwise.
*/

function solution(inputString) {
  const bits = inputString.split('.');
  if (bits.length !== 4) {
    return false;
  }
  for (let i = 0; i < bits.length; i++) {
    const element = bits[i];
    if (element.length > 1 && element.startsWith('0')) {
      return false;
    }
    if (+element > 255 || element === '' || isNaN(+element)) {
      return false;
    }
  }
  return true;
}

console.log(solution('172.16.254.1')); // true
console.log(solution('172.316.254.1')); // false
console.log(solution('.254.255.0')); // false
console.log(solution('1.1.1.1a')); // false

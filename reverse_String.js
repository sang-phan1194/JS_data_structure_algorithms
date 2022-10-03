/* 
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.

Test cases:
reverseString("hello") should return a string.
reverseString("hello") should return the string olleh.
reverseString("Howdy") should return the string ydwoH.
reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.
*/

// Solution:
function reverseString(str) {
  let reverStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverStr += str[i];
  }

  return (str = reverStr);
}

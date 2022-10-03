
/* 
Check if a string (first argument, str) ends with the given target string (second argument, target).
Note: Don't use .endsWith() method.

Test cases:

confirmEnding("Bastian", "n") should return true.
confirmEnding("Congratulation", "on") should return true.
confirmEnding("Connor", "n") should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
confirmEnding("He has to give me a new name", "name") should return true.
confirmEnding("Open sesame", "same") should return true.
confirmEnding("Open sesame", "sage") should return false.
confirmEnding("Open sesame", "game") should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
confirmEnding("Abstraction", "action") should return true.
Your code should not use the built-in method .endsWith() to solve the challenge.
*/

// Solution:

function confirmEnding(str, target) {
  if (str[str.length - 1] == target[target.length - 1] && reEx.test(str)) {
    return true;
  } else {
    return false;
  }
}

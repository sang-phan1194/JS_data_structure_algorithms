/*
Flatten a nested array. You must account for varying levels of nesting.
Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

Test cases:
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
*/

// Solution:
function steamrollArray(arr) {
  let output = [];
  for (let i in arr) {
    if (arr[i].constructor !== Array) {
      output.push(arr[i]);
    } else {
      output.push(...steamrollArray(arr[i]));
    }
  }
  return output;
}

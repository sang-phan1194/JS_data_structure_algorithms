// Create your own myMap() method can act like Javascript map() array method.

Array.prototype.myMap = function (cb) {
  let arrLength = this.length;
  let arrOutput = [];
  for (let i = 0; i < arrLength; i++) {
    let item = cb(this[i], i);
    arrOutput.push(item);
  }
  return arrOutput;
};

// Expected results:
const numbers = [1, 2, 3];

console.log(
  numbers.myMap(function (number) {
    return number * 2;
  })
);
// Output: [2, 4, 6]

console.log(
  numbers.myMap(function (number, index) {
    return number * index;
  })
);
// Output: [0, 2, 6]

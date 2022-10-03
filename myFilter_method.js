// Create your own myFilter() method can act like Javascript filter() array method.

Array.prototype.myFilter = function (cb) {
  let output = [];
  for (let index in this) {
    if (this.hasOwnProperty(index)) {
      let result = cb(this[index], index, this);
      if (result) {
        output.push(this[index]);
      }
    }
  }
  return output;
};


// Test cases:
const numbers = [1, 2, 3, 4];
console.log(
  numbers.myFilter(function (number) {
    return number % 2 === 0;
  })
);
// Expected results: Output: [2, 4]

console.log(numbers.myFilter(function (number, index) {return index % 2 === 0; 
})); 
// Expected results: Output: [1, 3]
        
console.log(numbers.myFilter(function (number, index, array) {
return array.length % 2 === 0;
})); 
// Expected results: Output: [1, 2, 3, 4]


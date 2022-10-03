
/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Test cases:
titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.
*/ 

// Solution:
function titleCase(str) {
    let arr = str.toLowerCase().split(' ');
    let newArr = [];
    for (let i in arr) {
      newArr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
    }
    return newArr.join(' ');
  }
  
  titleCase("I'm a little tea pot");
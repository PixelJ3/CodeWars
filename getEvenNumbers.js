/*
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

P: you will be given an array with numbers in it (odds and evens)
R: write a function that filters out the odds from the given array
E: 
getEvenNumbers([2,4,5,6]) // should == [2,4,6]
P: 
create a function that takes in an array
using the filter method, filter out the odds (n % 2 === 0)
return output
*/

function getEvenNumbers(numbersArray) {
  return numbersArray.filter((e) => e % 2 === 0);
}

const getEvenNumbers = (numbersArray) =>
  numbersArray.filter((e) => e % 2 === 0);

getEvenNumbers([1, 2, 3, 6, 8, 10]); //, [2,6,8,10])
getEvenNumbers([1, 2]); //, [2])
getEvenNumbers([12, 14, 15]); //, [12,14])
getEvenNumbers([13, 15]); //, [])
getEvenNumbers([1, 3, 9]); //, [])

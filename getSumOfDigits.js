/*
Debug function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

P: you will be given a random number
R: write a function that takes positive numbers to calculate sum of it's digits. Assuming that the argument is an integer.
E: 
123  => 6
223  => 7
1337 => 14
P:
create a function that takes in a number
turn the number into a string 
split the string into an array
using map turn the string back to a number
reduce the array by adding every element
return sum
*/

// function getSumOfDigits(integer) {
//   // var sum = null;
//   // var digits =  Math.floor(integer).toString();
//   // for(var ix = 1; ix < digits.length; ix = sum + 1) {
//   //   sum =+ digits[ix + 1];
//   // }
//   // return sum;
//   return String(integer).split('').map(Number).reduce((a,b) => a + b)

// }

const getSumOfDigits = (integer) =>
  String(integer)
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);

getSumOfDigits(123); // 6
getSumOfDigits(223); // 7
getSumOfDigits(0); // 0

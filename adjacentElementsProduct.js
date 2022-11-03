/*
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.
Array/list numbers could be a mixture of positives, negatives also zeroes .

P: you will be given an array of integers
R: write a function that finds the maximum product obtained from multiplying 2 adjacent numbers in the array.
E: 
adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
adjacentElementsProduct([1, 2, 3]); ==> return 6
P: 
create a function that takes in an array
create an empty array
using a for loop, loop through the array while mulplying each element with the next
ex: 
[3,2,1,3]
3*2 => 6
2*1 => 2
1*3 => 3
push each product to the empty array
return the maximum product from the array

*/
function adjacentElementsProduct(array) {
  let answerArray = [];

  for (let i = 0; i < array.length - 1; i++) {
    answerArray.push(array[i] * array[i + 1]);
  }

  return Math.max(...answerArray);
}

adjacentElementsProduct([5, 8]); // 40
adjacentElementsProduct([1, 2, 3]); // 6
adjacentElementsProduct([1, 5, 10, 9]); // 90
adjacentElementsProduct([4, 12, 3, 1, 5]); // 48
adjacentElementsProduct([5, 1, 2, 3, 1, 4]); // 6

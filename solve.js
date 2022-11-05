/*
DESCRIPTION:
Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

P: you will be given an array of numbers
R: create a function that removes the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.
E: For input: [3, 4, 4, 3, 6, 3]
remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]
P: 
create a function that takes in an array
reverse the array
using new set, create a new array 
reverse the array again
return output
*/

const solve = (arr) => [...new Set(arr.reverse())].reverse();

solve([3, 4, 4, 3, 6, 3]); // [4,6,3]
solve([1, 2, 1, 2, 1, 2, 3]); // [1,2,3]
solve([1, 2, 3, 4]); // [1,2,3,4]
solve([1, 1, 4, 5, 1, 2, 1]); // [4,5,2,1]
solve([1, 2, 1, 2, 1, 1, 3]); // [2,1,3]

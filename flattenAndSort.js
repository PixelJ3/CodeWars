/* 
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

P: you will be given an array with arrays within 
R: return the flattened version of the array with all the intergers in the sorted (ascending) order.
E: Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
P:
create a function that takes in an array
reduce the array into a single array 
sort the array 
return output

*/

// function flattenAndSort(array) {
//   let arr = array.reduce((previousValue, currentValue) => previousValue.concat(currentValue),
//   []);
//   return arr.sort((a,b) => a-b)
// }

function flattenAndSort(array) {
  let arr = array.reduce((a, b) => a.concat(b), []);
  return arr.sort((a, b) => a - b);
}

//one liner:
const flattenAndSort = (array) =>
  array.reduce((a, b) => a.concat(b), []).sort((a, b) => a - b);

flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]);
//output: [(1, 2, 3, 4, 5, 6, 100)]

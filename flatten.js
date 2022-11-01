/*
Write a function that flattens an Array of Array objects into a flat 
Array. Your function must only do one level of flattening.

P: you will be given an array that has multiple array within 
R: Write a function that flattens an Array of Array objects into a flat 
Array.
E: 
flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
P:
create a function that takes in an array
reduce the array that concats the arrays 
return output
*/

function flatten(array) {
  return array.reduce((a, b) => a.concat(b), []);
}
//one liner:
const flatten = (array) => array.reduce((a, b) => a.concat(b), []);

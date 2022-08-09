/*
Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:

[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
Points:
The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

P: you will be given two arrays
R: create an array by 
E: 
mergeArrays([a, b, c, d, e], [1, 2, 3, 4, 5])    //return output: [a, 1, b, 2, c, 3, d, 4, e, 5]
mergeArrays([1, 2, 3], [a, b, c, d, e, f])       //return output: [1, a, 2, b, 3, c, d, e, f]
P: 
create a function that takes in two arrays
create a new empty array
create a boolean
if a is shorter push it while shifting b
if b is shorter push it while shifting a
return results

*/

function mergeArrays(a, b) {
  const result = [];
  while (a.length || b.length) {
    if (a.length) result.push(a.shift());
    if (b.length) result.push(b.shift());
  }
  return result;
}
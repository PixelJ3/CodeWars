/* 
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
[4, 1, 1, 1, 4] = 16
[2, 2, 2, 2, 2, 2] = 64

P: you will be given an array.
R: return the result of multiplying the values together in order
E: 
grow([1, 2, 3, 4])   // => 1 * 2 * 3 * 4 expected output: 24
grow([4, 1, 1, 1, 4]) //expected output: 16
grow([2, 2, 2, 2, 2, 2]) //expected output: 64
P: 
create a function that takes in an array
reduce arr where it multiplies each element 
return total
*/

function grow(x) {
  return (multiplyArray = x.reduce((a, b) => a * b));
}

//one line:
const grow = (x) => x.reduce((a, b) => a * b);

/* 
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.


P: you will be given an array with random numbers
R: create a function that removes duplicates from an array of numbers and returns it as a result
E: 
[1]       Expected output: [1]);
[1,2]     Expected output: [1,2]);
[1,1,2]   Expected output: [1,2]);
P:
create a function that takes in an array
create a var
use new Set on the given array
store it in created array
return created array
*/
function distinct(a) {
  let set = new Set([...a]);
  return [...set];
}

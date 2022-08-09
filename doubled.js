/* Given an array of integers, return a new array with each value doubled.

For example:
[1, 2, 3] --> [2, 4, 6]

P: Is it always going to be integers? Are we going to be given 
any special characters? An empty arr ever?
R: Return a new arr with each value doubled
E:
    if we are given [2,3,4], should return [4,6,8]
    if we are given [4,5,6], should return [8,10,12]
    if we are given [2,22], should return [4,44]
    
P: Create a function that takes in an array */
function doubled(arr) {
  //then use map to create a new array
  //multiply each element by 2
  return arr.map((Element) => Element * 2);
}

// one line:
const doubled = (arr) => arr.map((element) => element * 2);

doubled([1, 2, 3]); //Expected outcome: [2,4,6]
doubled([2, 3, 4]); // Expected output [4,6,8]

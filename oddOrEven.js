/*
Given a list of integers, determine whether the sum of its elements is odd or even.
Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

P: you will be given an array of numbers positive and negative
R: return "odd" or "even" if the sum is odd or even
E: 
    Input: [0]  //"even"

    Input: [0, 1, 4] //"odd"

    Input: [0, -1, -5]  //"even"
P: 
Create a function that takes in array
check if array if empty if so return 'even'
else:
    reduce the array
    check if its even (if statement)
    if true: return "even"
    if false: return "odd"
*/
function oddOrEven(array) {
  if (array.length === 0) {
    return "even";
  } else {
    let sum = array.reduce((a, b) => a + b);
    if (sum % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
}

/*
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.

P: you will be given an array with set of values 
R: return the largest pair sum in the sequence 
E: 
    largestPairSum([10, 14, 2, 23, 19]); // 42);
    largestPairSum([-100, -29, -24, -19, 19]); // 0);
    largestPairSum([1, 2, 3, 4, 6, -1, 2]); // 10
    largestPairSum([-10, -8, -16, -18, -19]); // -18
P:  
create a function that takes in an array
sort the array
add return the first 2 elements of the arr
*/

function largestPairSum(numbers) {
  let sorted = numbers.sort((a, b) => a - b);
  let lastTwoBig = sorted.slice(-2).reduce((a, b) => a + b);
  return lastTwoBig;
}

//lets re-write this in one line
const largestPairSum = (numbers) =>
  numbers
    .sort((a, b) => a - b)
    .slice(-2)
    .reduce((a, b) => a + b);

// largestPairSum([10, 14, 2, 23, 19]); // expected output: 42
// largestPairSum([-100, -29, -24, -19, 19]); // expected output: 0
// largestPairSum([1, 2, 3, 4, 6, -1, 2]); // expected output: 10
// largestPairSum([-10, -8, -16, -18, -19]); // expected output: -18

/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Ex: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

P: you will be given a binary number
R: write a function that converts the equivalent binary value to an integer
E:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4. 

P:
create a function that takes in an array(the binary array)
join the array
convert bin to int using parseInt(n,2)
return output 
*/
const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};

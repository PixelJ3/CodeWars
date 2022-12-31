/*
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all 
their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

P: you will be given two arrays
R: return the sum of the two given arrays
E: 
arrayPlusArray([0, 0, 0], [4, 5, 6]); // 15
P: 
create a function that takes in two arrays(a,b)
reduce array 1
reduce array 2
add arr1 + arr2
return sum
*/

function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((a, b) => a + b) + arr2.reduce((a, b) => a + b);
}

arrayPlusArray([1, 2, 3], [4, 5, 6]); // 21
arrayPlusArray([-1, -2, -3], [-4, -5, -6]); // -21
arrayPlusArray([0, 0, 0], [4, 5, 6]); // 15
arrayPlusArray([100, 200, 300], [400, 500, 600]); //2100

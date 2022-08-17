/*
Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.

P: you will be given an array with multiple numbers 
R: return the calculated average of the numbers in the given list, or return 0 if array is empty
E: 
find_average([1, 1, 1]);    //should return: 1
find_average([1, 2, 3]);    //should return: 2
find_average([1, 2, 3, 4]); //should return: 2.5
P: 
create a function that takes in an array
if arr length is bigger than 0
reduce the array and divide it by the arr lenth to get average
if arr is 0/empty return 0
*/
function find_average(array) {
  if (array.length > 0) {
    return (average = array.reduce((a, b) => a + b, 0) / array.length);
  } else {
    return 0;
  }
}

find_average([1, 1, 1]); // expected output: 1
find_average([1, 2, 3]); // expected output: 2
find_average([1, 2, 3, 4]); // expected output: 2.5

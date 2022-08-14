/*
Your task is to make two functions ( max and min, or maximum and minimum, etc., 
depending on the language ) that receive a list of integers as 
input, and return the largest and lowest number in that list, respectively.

Notes
You may consider that there will not be any empty arrays/vectors.

P: you will be given an array of numbers
R: when requested for min return min of array, when requested for max return max of array
E: 
Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
P: 
create a function that takes in an array
when requested for min, sort a - b and return index 0
when requested for max, sort b - a and return index 0
*/
var min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};

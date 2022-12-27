/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students 
come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

P: you will be given an array as the parameter
R: create a function that returns the average of the given array rounded down to its nearest integer.
E:
getAverage([1,2,3,4,5]) // 3
P:
create a function that takes in an array
reduce the array a + b
divide the sum by the array length
using Math.floor, return the results
*/
function getAverage(marks) {
  return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
}

getAverage([2, 2, 2, 2]); // 2
getAverage([1, 2, 3, 4, 5]); // 3
getAverage([1, 1, 1, 1, 1, 1, 1, 2]); // 1

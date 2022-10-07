/* 
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.



P: you will be given an array with a random amount of values
R: 
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ). 
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
E: 
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
P: 
create a function that takes in an array
if array is empty or null 
return 0
if array is less than 3 
return 0
else 
sort the array from a - b
remove first and last index
reduce array  a + b
return sum
*/

function sumArray(array) {
  if (array == null || array.length < 3) {
    return 0;
  } else {
    let sorted = array.sort((a, b) => a - b);
    sorted.pop();
    sorted.shift();
    return array.reduce((a, b) => a + b);
  }
}

sumArray([-6, 20, -1, 10, -12]); //3
sumArray([3, 5]); //0
sumArray([3]); //0
sumArray([]); //0
sumArray(null); //0

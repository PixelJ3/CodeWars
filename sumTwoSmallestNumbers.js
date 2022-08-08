/* 
Create a function that returns the sum of the two lowest positive 
numbers given an array of minimum 4 positive integers. No floats or 
non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the 
output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

P: you will be given a set of numbers in an array 
R: return the sum of the smallest integers
E:
([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
([52, 76, 14, 12, 4]), 16 , "Sum should be 16");

P: 
create a function that takes in an array
create a var arr and assign it the sorted array
then add index 0 and 1 
return 
*/

function sumTwoSmallestNumbers(numbers) {
  let arr = numbers.sort((a, b) => a - b);
  return arr[0] + arr[1];
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22]); //"Sum should be 13"
sumTwoSmallestNumbers([15, 28, 4, 2, 43]); //"Sum should be 6"
sumTwoSmallestNumbers([3, 87, 45, 12, 7]); //"Sum should be 10"
sumTwoSmallestNumbers([23, 71, 33, 82, 1]); //"Sum should be 24"
sumTwoSmallestNumbers([52, 76, 14, 12, 4]); //"Sum should be 16"

//in one line:
const sumTwoSmallestNumbers = (numbers) =>
  numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((a, b) => a + b);

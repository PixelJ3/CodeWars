/*
Find the mean (average) of a list of numbers in an array.

Information
To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

For an example list of 1, 3, 5, 7

1. Add all of the numbers

1+3+5+7 = 16
2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

16/4 = 4
3. The mean (or average) of this list is 4

P:  you will be given an array with random values 
R:  return the mean of the given list
E: 
    findAverage([1, 3, 5, 7]); //4
P: 

create a function that takes in an array
reduce array
then divide sum by array length
return total

*/

var findAverage = function (nums) {
  return (total =
    nums.reduce((previousValue, currentValue) => previousValue + currentValue) /
    nums.length);
};

// 1 line of code:
const findAverage = (nums) => nums.reduce((a, b) => a + b) / nums.length;

findAverage([1, 3, 5, 7]); //4

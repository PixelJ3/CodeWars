/*
In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will 
consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the 
difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random one

P: you will be given two arrays with 3 elements that is above 0
R: return the difference between the two 'cuboids' volume
E: 
findDifference([9, 7, 2], [5, 2, 2])        //expected output: 106
findDifference([15, 20, 25], [10, 30, 25])  //expected output: 0
findDifference([11, 2, 5], [1, 10, 8])      //expected output: 30
findDifference([3, 2, 5], [1, 4, 4])        //expected output: 14
findDifference([4, 4, 7], [3, 9, 3])        //expected output: 31
findDifference([6, 21, 18], [28, 23, 18])   //expected output: 9324
P: 
create a function that takes in two arrays
reduce(multiply) all the elements in each array
array a - array b
return difference

*/

const findDifference = (a, b) =>
  (totalDifference = Math.abs(
    a.reduce((a, b) => a * b) - b.reduce((a, b) => a * b)
  ));

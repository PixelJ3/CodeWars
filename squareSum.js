/*
Complete the square sum function so that it squares each number 
passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9. 


P: you will be given an with random amounts of random numbers
R: square each number in the array and then add every array element
E: 
    squareSum([1,2]),           returns: 5
    squareSum([0, 3, 4, 5]),    returns: 50
    squareSum([]),              returns: 0
    squareSum([1, 2, 2]),       returns: 9
P: 

create a function that takes in numbers/array
    function squareSum(numbers){

    }
then map a new array that squares every element
    let squaredArray = numbers.map(x => x * 2)
then reduce the array
    const initialValue = 0; 
    const sumWithInitial = squaredArray.reduce( 
	(previousValue, currentValue) => previousValue + currentValue, 
	initialValue
);
return total
*/

function squareSum(numbers) {
  let squaredArray = numbers.map((x) => x * x);
  let initialValue = 0;
  return (sumWithInitial = squaredArray.reduce((a, b) => a + b, initialValue));
}

//in one line:
const squareSum = (numbers) =>
  numbers.map((x) => x * x).reduce((a, b) => a + b, 0);

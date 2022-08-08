/* 
Given an array of integers as strings and numbers, return the 
sum of the array values as if all were numbers.
Return your answer as a number.

Ex:
    sumMix([9, 3, '7', '3']),   22 
    sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]),   42
    sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']),  41

P: is there any negative numbers in the array? any floats?
R: we need to return the sum of strings and numbers in the array
E:
     sumMix([9, 3, '7', '3']),   22 
    sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]),   42
    sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']),  41
P:
Create a function that takes in an array
convert stings into values
add numbers
return 
*/

function sumMix(x) {
  const arrOfStr = x;
  const arrOfNum = [];
  arrOfStr.forEach((str) => {
    arrOfNum.push(Number(str));
  });
  const array = arrOfNum;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// Shorter W/same results
function sumMix(x) {
  return x.map((a) => +a).reduce((a, b) => a + b);
}

// in on line:
const sumMix = (x) => x.map((a) => +a).reduce((a, b) => a + b);

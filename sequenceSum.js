/*
Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0

P: you will be given three parameters
R: create a function that returns the sum of a sequence of integers.
E:
2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
P:
create a function that takes in 3 parameters(begin, end, step)
if begin is bigger than end, return 0
else 
create an empty array
using a for loop
loop through the numbers up until the given number while pushing each element to the array
reduce the array
return sum
*/
const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }
  let arr = [];
  for (let i = begin; i <= end; i += step) {
    arr.push(i);
  }
  return arr.reduce((a, b) => a + b);
};

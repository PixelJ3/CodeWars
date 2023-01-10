/*
Return an array containing the numbers from 1 to N, where N is the parametered value.
Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

P: you will be given a random number
R: Return an array containing the numbers from 1 to N, where N is the parametered value. 
If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.
E: fizzbuzz(3) -->  [1, 2, "Fizz"]
P: 
create a function that takes in a number
create an empty array 
using a for loop 
loop through the numbers until the given number 
If the value is a multiple of 3 & 5, push "FizzBuzz" into the arr
If the value is a multiple of 3, push "Fizz" into the arr
If the value is a multiple of 5, push "Buzz" into the arr
or else
push i into arr
return arr

*/

function fizzbuzz(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
}

fizzbuzz(10); //=> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz' ]
fizzbuzz(15); //=> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz' ]

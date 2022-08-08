/*
In this simple exercise, you will build a program that takes a value, 
integer , and returns a list of its multiples up to another value, limit .
If limit is a multiple of integer, it should be included as well. There will only ever 
be positive integers passed into the function, not consisting of 0. The limit will
always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6]
as 2, 4, and 6 are the multiples of 2 up to 6.

*** If you can, try writing it in only one line of code. ***



P: is there anyfloats, negative numbers? 
R: return a list of its multiple up to another value, limit
E:
    if the parameters passed are (2,6), return [2,4,6] //because 2,4,6 are a the multiples of 2 up to 6  
                                                        // so do we create a loop, starting from a and ending at b? 
                                                        // then checking if the numbers are a multiple of 2 by (a%2===0)?

  (5, 25),       return [5, 10, 15, 20, 25]
  (1, 2),        return [1, 2]
  (5, 7),        return [5]
  (4, 27),       return [4, 8, 12, 16, 20, 24]
  (11, 54),      return [11, 22, 33, 44]



P:
create a function that takes in two values (a,b)
create a loop that starts at a, adds up by a, ends at b
return array */

function findMultiples(int, limit) {
  let result = [];

  for (let i = int; i <= limit; i += int) result.push(i);

  return result;
}

/*
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5 



P: you will be given 3 different inputs
R: return true or false if n is divisible by x and y.
E: 
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5 
P: 
create a function that takes in 3 different inputs (n,x,y)
use % to get the remainder of (n,x) and (n,y)
if both remainders === 0 return true 
else return false
*/

// function isDivisible(n, x, y) {
//   return n%x===0 && n%y===0
// }

const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;

isDivisible(12, 3, 4); //True
isDivisible(3, 3, 4); //False
isDivisible(8, 3, 4); //False
isDivisible(48, 3, 4); //True

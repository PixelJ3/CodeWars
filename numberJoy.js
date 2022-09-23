/*
Positive integers that are divisible exactly by the sum of their digits are called 
Harshad numbers. The first few Harshad numbers are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...

We are interested in Harshad numbers where the product of its digit sum s and s with 
the digits reversed, gives the original number n. For example consider number 1729:

Complete the function which tests if a positive integer n is Harshad number, 
and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.

P:you will be given a random number
R: return True if the product of its digit sum and its digit sum reversed equals n; otherwise return False
E: 
its digit sum, s = 1 + 7 + 2 + 9 = 19
reversing s = 91
and 19 * 91 = 1729 --> the number that we started with.

P: 
create a function that takes in a num
turn the given number into an array
add every number
copy added number and reverse it 
multiply the two numbers
if product matches given starting number
return true 
else return false
*/

function numberJoy(n) {
  let numFunc = (num) => Number(num);
  let sum = Array.from(String(n), numFunc).reduce((a, b) => a + b);
  let reversedSum = numFunc(String(sum).split("").reverse().join(""));
  return n == sum * reversedSum;
}

numberJoy(1458); //true
numberJoy(1729); //true
numberJoy(1998); //false
numberJoy(1997); //false

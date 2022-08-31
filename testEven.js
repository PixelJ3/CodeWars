/*
In this Kata we are passing a number (n) into a function.
Your code will determine if the number passed is even (or not).
The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.
Floats with decimal part non equal to zero are considered UNeven for this kata.

P: you will be given a random number (positive, negative, int or float)
R: return true if even, else return false
E:
testEven(0),   //expected output: true
testEven(0.5), //expected output: false 
testEven(1),   //expected output: false
testEven(2),   //expected output: true
testEven(-4),  //expected output: true 
P: 
create a function that takes in any number
if number % 2 is equal to 0, return true 
else return false
*/

const testEven = (n) => (n % 2 === 0 ? true : false);

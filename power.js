/*
Create a method called power that takes two integers and returns the value of the first argument raised to the power of the second.

Unlike the Exponent Method, you should also take in account negative exponents.

Your solution won't be tested against special cases leading to undefined values (0**-2 for example)

Note: The ** operator (JS: Math.pow) has been disabled.

P: you will be given 2 parameters
R: return the value of the first argument raised to the power of the second
E: 
power(4, -2) //8
power(2, 3)  //0.0625
P: 
create a function that takes in 2 parameters
multiply ( x ** y)
return the results
*/

const power = (x, y) => x ** y;

power(4, -2); //8
power(2, 3); //0.0625

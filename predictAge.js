/*
My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.

Note: the result should be rounded down to the nearest integer.

Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.


P: you will be given a list of ages (multiply parameters)
R: write a function that multiplies the given parameters, adds them together, gets the square root, and divides by two, and returns the output
E:
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86 
P: 
create a function that takes in multiple parameters
have the multiple parameters be turned into an array
using map, multiply each element in the array with itself
reduce(add) the array
square root the sum
divide the output by 2
using floor, floor the dividend 
return output
*/

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let ageArr = [age1, age2, age3, age4, age5, age6, age7, age8];
  let totalAge = ageArr.map((x) => x * x).reduce((a, b) => a + b, 0);
  return Math.floor(Math.sqrt(totalAge) / 2);
}

//shorter vers.
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  return Math.floor(
    Math.sqrt(
      [age1, age2, age3, age4, age5, age6, age7, age8]
        .map((x) => x * x)
        .reduce((a, b) => a + b)
    ) / 2
  );
}

//arrow function:
const predictAge = (age1, age2, age3, age4, age5, age6, age7, age8) =>
  Math.floor(
    Math.sqrt(
      [age1, age2, age3, age4, age5, age6, age7, age8]
        .map((x) => x * x)
        .reduce((a, b) => a + b)
    ) / 2
  );

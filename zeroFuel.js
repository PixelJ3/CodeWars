/*
You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel 
is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles 
per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible 
to get to the pump or not. Function should return true if it is possible and false if not.


P: the 3 parameters are distanceToPump, mpg, and fuelLeft  
R: return false if you can't make it to the pump, return true if you can.
E: 
  zeroFuel(50, 25, 2) //expected output: true
  zeroFuel(100, 50, 1) //expected output: false
P: 
create a function that takes in the three parameters. 
multiply mpg and fuelLeft, then assign it to a variable
compare new var with distanceToPump. 
if newVar is equal to or greater than distanceToPump then return true
else return false

*/

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   let gasLeftToDistance = mpg * fuelLeft;
//   if (gasLeftToDistance >= distanceToPump) {
//     return true;
//   } else {
//     return false;
//   }
// };

//in one line:
const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  mpg * fuelLeft >= distanceToPump ? true : false;

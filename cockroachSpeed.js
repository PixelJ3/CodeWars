/*
The cockroach is one of the fastest insects. Write a function which takes its 
speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:
1.08 --> 30

Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

P: you will be given an number that is greater than 0 
R: convert the speed of a cockroach from km per hour to cm per hour, rounded down to the integer. 
E: 
    cockroachSpeed(1.08) //expected output: 30;
P: 
create a funciton that takes in the given speed
multiply given speed to 27.7778
round results using parseInt
return results
*/

const cockroachSpeed = (s) => (speed = parseInt(s * 27.7778));

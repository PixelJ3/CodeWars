/* 
After a hard quarter in the office you decide to get some rest on a vacation. 
So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. 
The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, 
you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

P: you will be given the number of days
R: return the total amount for different days(d)
E:

rentalCarCost(2)    //expected output: 80 
rentalCarCost(3)    //expected output: 100
rentalCarCost(9)    //expected output: 310

P: 
create a function that takes in a number
if case(if d is smaller than 3, d * 40)
else if ( d > 2 && d < 7, d * 40 - 20)
else ( return d * 40 - 50)
return output

*/
function rentalCarCost(d) {
  if (d < 3) {
    return d * 40;
  } else if (d > 2 && d < 7) {
    return d * 40 - 20;
  } else {
    return d * 40 - 50;
  }
}

// in one line:
const rentalCarCost = (d) =>
  d < 3 ? d * 40 : d > 2 && d < 7 ? d * 40 - 20 : d * 40 - 50;

rentalCarCost(1); //expected ouput: 40
rentalCarCost(2); //expected ouput: 80
rentalCarCost(3); //expected ouput: 100
rentalCarCost(4); //expected ouput: 140
rentalCarCost(5); //expected ouput: 180
rentalCarCost(6); //expected ouput: 220
rentalCarCost(7); //expected ouput: 230
rentalCarCost(8); //expected ouput: 270
rentalCarCost(9); //expected ouput: 310
rentalCarCost(10); //expected ouput: 350

/*
The company you work for has just been awarded a contract to build a payment gateway. 
In order to help move things along, you have volunteered to create a function 
that will take a float and return the amount formatting in dollars and cents.

39.99 becomes $39.99

The rest of your team will make sure that the argument is sanitized 
before being passed to your function although you will need to account for adding 
trailing zeros if they are missing (though you won't have to worry about a dangling period).

Examples:
3 needs to become $3.00

3.1 needs to become $3.10
Good luck! Your team knows they can count on you!

P: you will be given a random number or float
R: write a function that returns the given number in a dollar/cent format.
E: 
    3 => $3.00
    39.99 => $39.99
    12.1 => $12.10
P:
create a function that takes in a number 
using toFixed return the amount in a decimal format
return the amount with '$' concat in the front
*/

function formatMoney(amount) {
  return "$" + amount.toFixed(2);
}

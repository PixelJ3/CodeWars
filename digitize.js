/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example(Input => Output):
348597 => [7,9,5,8,4,3]
0 => [0]

P: you will be given a random number 
R: return the digits of this number within an array in reverse order
E: 
    348597 => [7,9,5,8,4,3]
    123450 => [0,5,4,3,2,1]
P: 
create a function that takes in number
turn number into a string
split the string 
reverse()
then map into a new array
return new array in Number

*/

function digitize(n) {
  return (reverse = n.toString().split("").reverse().map(Number));
}

// in one line:
const digitize = (n) => n.toString().split("").reverse().map(Number);

digitize(348597); //returns [7,9,5,8,4,3]
digitize(123450); //returns [0,5,4,3,2,1]

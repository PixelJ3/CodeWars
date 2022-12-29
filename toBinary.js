/*
Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

to_binary(1)   //should return 1 
to_binary(5);  //should return 101 
to_binary(11);  //should return 1011
_________________________________________
Example: toBinary(1); // should return 1 
toBinary(5);  //should return 101 
toBinary(11); // should return 1011

P: you will be given a random number
R: create a function that returns the given number in binary format
E:
toBinary(5) // 101
P: 
create a function that takes in a number
Using number.toString(), convert the given number to binary
convert the string to number, using Number(n)
return output
*/
function toBinary(number) {
  return Number(number.toString(2));
}

toBinary(1); // 1
toBinary(2); // 10
toBinary(3); // 11
toBinary(5); // 101

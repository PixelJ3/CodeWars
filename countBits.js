/*
Write a function that takes an integer as input, and returns the number of bits that are 
equal to one in the binary representation of that number. You can guarantee that input is non-negative.
Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

P: you will be given a random number
R: return the total 1's in the binary form of the given number
E: 
    countBits(0)     //expected output: 0
    countBits(4)     //expected output: 1
    countBits(7)     //expected output: 3
    countBits(9)     //expected output: 2
    countBits(10)    //expected output: 2
P: 
create a function that takes in a number
then assign the number to a variable 
use % 2 and assign the remainder to a var
create a for loop
    assign a var to a parseInt(2)
    assign binary to remain + binary
return
*/
function countBits(number) {
  let num = number;
  let binary = num % 2;
  for (; num > 1; ) {
    num = parseInt(num / 2);
    binary = (num % 2) + binary;
  }
  return binary;
}

//in one line
countBits = (n) => n.toString(2).split("0").join("").length;

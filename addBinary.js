/*
Implement a function that adds two numbers together and returns their sum in binary.
The conversion can be done before, or after the addition.

The binary number returned should be a string.

P: you will be given two numbers
R:create a function that adds two numbers together and returns their sum in binary.
E: 
Examples:(Input1, Input2 --> Output (explanation)))

addBinary(1,1) --> "10" (1 + 1 = 2 in decimal or 10 in binary)
addBinary(5,9) --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
P: 
create a function that takes in two parameters(numbers)
add a + b
using the toString(2) method, convert sum into binary
return output
*/

function addBinary(a, b) {
  return (a + b).toString(2);
}

//one liner:
const addBinary = (a, b) => (a + b).toString(2);

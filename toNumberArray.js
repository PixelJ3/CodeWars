/*
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!
You need to cast the whole array to the correct type.
Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

Note that you can receive floats as well.

P: you will be given an array of string numbers and floats
R: write a function that converts the string array to number array
E:
["1", "2", "3"] to [1, 2, 3]
P:
create a function that takes in an array
using map(Number) convert string to number
return output
*/

function toNumberArray(stringarray) {
  return stringarray.map(Number);
}

const toNumberArray = (stringarray) => stringarray.map(Number);

toNumberArray(["1.1", "2.2", "3.3"]); // [1.1,2.2,3.3]

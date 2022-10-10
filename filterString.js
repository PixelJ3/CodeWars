/*
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, 
can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

P: you will be given a string with letters and numbers
R: filter out the letters and return the numbers
E: filterString("a1b2c3") => 123
P: 
create a function with a parameter of value
replace all non numberical string with blanks
using parseInt, turn string into values
return output
*/
var filterString = function (value) {
  return parseInt(value.replace(/\D/g, ""));
};

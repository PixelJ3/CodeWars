/*
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test 
input may be "1 year old" or "5 years old". The first character in the string is always a number.
P: you will be given a sentence with a number 
R: return the number from the given string
E: 
"1 year old" => 1
"5 year old" => 5
P: 
create a function that takes the given string
return the number using parseIne
*/

function getAge(inputString) {
  return parseInt(inputString);
}

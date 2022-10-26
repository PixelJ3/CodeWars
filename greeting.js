/*
Write a method that takes one argument as name 
and then greets that name, capitalized and ends with an exclamation point.

P: you will be given a string  
R: write a function that greets that name, capitalized and ends with an exclamation point.
E: 
"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
P: 
create a function that takes in a string
turn the given string lower case using .toLowerCase() method
uppercase the first letter and add the substring(1)
return `Hello {upperCase + lowerCaseSubstring}!`
*/

function greet(name) {
  let lowerCase = name.toLowerCase();
  return `Hello ${lowerCase[0].toUpperCase() + lowerCase.substring(1)}!`;
}

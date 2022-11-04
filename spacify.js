/*
Modify the spacify function so that it returns the given string with spaces inserted between each character.

P: you will be given a string
R: write a function that returns the given string with spaces inserted between each character.
E: spacify("hello world") =>  'h e l l o   w o r l d'
P: 
create a function that takes in a string
split the string into an array
join the string with a space 
return output
*/

function spacify(str) {
  return str.split("").join(" ");
}

spacify("hello world"); // 'h e l l o   w o r l d'

/*
create a function which converts the input string to uppercase.

P: you will be given a string
R: return the string in uppercase
E: 
makeUpperCase('hello')    // returned output: 'HELLO'
makeUpperCase('name')     // returned output: 'NAME'
makeUpperCase('welcome')  // returned output: 'WELCOME'
P: 
create a function that takes in a string 
return string with toUpperCase()
*/

function makeUpperCase(str) {
  return str.toUpperCase();
}

//in one line:
const makeUpperCase = (str) => str.toUpperCase();

makeUpperCase("hello"); // returned output: 'HELLO'
makeUpperCase("name"); // returned output: 'NAME'
makeUpperCase("welcome"); // returned output: 'WELCOME'

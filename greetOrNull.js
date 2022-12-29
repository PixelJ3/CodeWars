/*
Say hello!

Write a function to greet a person. Function will take name as input and greet the 
person by saying hello. Return null/nil/None if input is empty string or null/nil/None.

Example:

greet("Niks") === "hello Niks!";
greet("") === null; // Return null if input is empty string
greet(null) === null; // Return null if input is null

P: you will be given a string,null, or empty(one parameter)
R: create a function to greet a person. Function will take name as input and greet the 
person by saying hello. Return null/nil/None if input is empty string or null/nil/None.
E: 
greet("Niks") //"hello Niks!"
greet("")  //null
greet(null)  //null
P:
create a function that takes in a string
if the name is null or empty(" "), return null
else 
return name using a template literal 

*/
function greet(name) {
  if (name === null || name == "") {
    return null;
  } else {
    return `hello ${name}!`;
  }
}

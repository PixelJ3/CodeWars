/*
create a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

Examples:
42, "number"   --> true
"42", "number" --> false

P: you will be given 2 parameters a variable and a type
R: return true or false if the type matches the variable
E: 
typeValidation("42", "number")   //false
typeValidation(42, "number")     //true
P: 
create a function that takes in 2 parameters
use typeof on the given variable to get the type of data and compare it to the requested type 
if it matches return true 
if not return false
*/
function typeValidation(variable, type) {
  return typeof variable === type;
}

//using an arrow function:
const typeValidation = (variable, type) => typeof variable === type;

typeValidation("42", "number"); //expected output: false
typeValidation(42, "number"); //expected output: true

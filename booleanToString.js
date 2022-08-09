/*
Implement a function which convert the given boolean
value into its string representation.

Note: Only valid inputs will be given.

P:is it only values given? 
R:return 'false' if false
  return 'true' if true 
E:
    booleanToString(true), "true", 'When we pass in true, we want the string "true" as output'
    booleanToString(false), "false", 'When we pass in false, we want the string "false" as output'

P: create a function that takes in a boolean value
    create an if statement 
    if true return "true"
    else return "false"
*/

function booleanToString(b) {
  if (b === true) {
    return "true";
  } else {
    return "false";
  }
}

//in one line:
const booleanToString = (b) => `${b}`;

booleanToString(true); //"true", 'When we pass in true, we want the string "true" as output'
booleanToString(false); //"false", 'When we pass in false, we want the string "false" as output'

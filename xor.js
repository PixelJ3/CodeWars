/*
In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the 
"Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns 
true if exactly one of the two expressions are true, false otherwise. For example:

false xor false == false // since both are false
true xor false == true // exactly one of the two expressions are true
false xor true == true // exactly one of the two expressions are true
true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.

P: you will be given two parameters (a,b)
R: create a function that uses evaluates two booleans, It then returns 
true if exactly one of the two expressions are true, false otherwise.
E:
xor(true, true), false; // "true xor true === false"
P:
create function that takes in two values(parameters)
if a does not equal b, return false
else return true
*/
function xor(a, b) {
  return !a == b;
}

xor(false, false), false; // "false xor false === false"
xor(true, false), true; // "true xor false === true"
xor(false, true), true; // "false xor true === true"
xor(true, true), false; // "true xor true === false"
xor(true, true), true; // "'xor' is NOT identical to 'or'"

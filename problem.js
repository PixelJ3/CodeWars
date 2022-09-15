/*
Make a function that returns the value multiplied by 50 and increased by 6.
If the value entered is a string it should return "Error".

P: you will be given random data
R: return the value multiplied by 50 and increased by 6, if the value entered is a string
it should return "ERROR"
E: 
problem("hello") => 'ERROR'
Problem("1") => 56
P: 
create a function that takes in a given value
use typeof on value
if the value type if 'string'
return 'ERROR'
else 
return x * 50 + 6

*/
function problem(x) {
  if (typeof x == "string") {
    return "Error";
  } else {
    return x * 50 + 6;
  }
}

problem(""); // 'Error'
problem("hello"); // 'Error'
problem("RyanIsCool"); // 'Error'
problem(1); // 56
problem(-3); // -144

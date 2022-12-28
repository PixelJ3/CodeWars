/*
Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

Example:

get_char(65)
should return:

'A'

P: you will be given a random number
R:create a function that takes in a number and returns the corresponding ASCII char for that value.
E:
getChar(65) //"A"
P:
create a function that takes in a number
using fromCharCode, return the corresponding ASCII character
return value
*/

// function getChar(c){
//  return String.fromCharCode(c)
// }
const getChar = (c) => String.fromCharCode(c);

getChar(55); //"7";

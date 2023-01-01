/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

P: you will be given a string
R: create a function that removes all exclamation marks and returns the string.
E:
removeExclamationMarks("!!!Hello!!!World!!!"); //'Hello World'
P:
create a function that takes in a string
using replaceAll, replace all "!" with ""
return str

*/

// function removeExclamationMarks(s) {
//   return s.replaceAll( "!", "");
// }

//One Line:
const removeExclamationMarks = (s) => s.replaceAll("!", "");

removeExclamationMarks("!!!Hello World!!!"); //'Hello World'
removeExclamationMarks("Hello World!!!!!!!"); //'Hello World'

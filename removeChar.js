/*
It's pretty straightforward. Your goal is to create a function that removes the 
first and last characters of a string. You're given one parameter, the original string.
You don't have to worry with strings with less than two characters.




P: strings only
R: return the given string with the first and final character removed
E:
removeChar('eloquent'), 'loquen'
removeChar('country'), 'ountr'
removeChar('person'), 'erso'
removeChar('place'), 'lac'
removeChar('ooopsss'), 'oopss'

P:
create a function that takes in the given string
create an array by spliting the string 
pop the array to remove the final character 
shift the array to remoce the first character
then join the array to create a string 
then return the answer
*/

function removeChar(str) {
  let array = str.split("");
  let removed = array.shift();
  removed = array.pop();
  return array.join("");
}

// to make it WAY more simpler
function removeChar(str) {
  return str.slice(1, -1);
}

// in one line
const removeChar = (str) => str.slice(1, -1);

removeChar("eloquent"); //expected output: 'loquen'
removeChar("country"); //expected output: 'ountr'
removeChar("person"); //expected output: 'erso'
removeChar("place"); //expected output: 'lac'
removeChar("ooopsss"); //expected output: 'oopss'

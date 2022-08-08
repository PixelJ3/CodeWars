/* Write a function to split a string and convert it into an array of words

P: you will be given a string 
R: return an array created from the string
E: 
    start       => ["s","t","a","r","t"]
    beginning   => ["b","e","g","i","n","n","i","n","g"]
    freedom     => ["f","r","e","e","d","o","m"]
P:
create a function that takes in a word 
then split it and return
*/
function stringToArray(string) {
  return string.split("");
}
// in one line
const stringToArray = (string) => string.split("");

stringToArray("start"); //returns: ["s","t","a","r","t"]
stringToArray("beginning"); //returns: ["b","e","g","i","n","n","i","n","g"]
stringToArray("freedom"); //returns: ["f","r","e","e","d","o","m"]

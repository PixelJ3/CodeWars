/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

P: you will be given a string of words
R: create a function that returns the length of the shortest word from the given string of words
E: 
findShort("bitcoin take over the world maybe who knows perhaps"); //, 3);
P:
create a fuction that takes in a string
split the string into an array
map the array by length
return the minimun using Math min
*/
function findShort(s) {
  return Math.min(...s.split(" ").map((x) => x.length));
}

findShort("bitcoin take over the world maybe who knows perhaps"); //, 3);
findShort("turns out random test cases are easier than writing out basic ones"); //, 3);
findShort("Let's travel abroad shall we"); //, 2);

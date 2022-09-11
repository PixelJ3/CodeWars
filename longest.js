/* 
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the
longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

P: you will be given two strings 
R: Return a new sorted string, the
longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
E: 
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

P:
create a function that takes in two strings
turn both strings into arrays 
create a new set with arrays
sort the array
join the array into a string
return string
*/

function longest(s1, s2) {
  let array = [...s1, ...s2];
  return (unique = [...new Set(array)].sort().join(""));
}
longest("aretheyhere", "yestheyarehere"); // "aehrsty"
longest("loopingisfunbutdangerous", "lessdangerousthancoding"); // "abcdefghilnoprstu"
longest("inmanylanguages", "theresapairoffunctions"); // "acefghilmnoprstuy"

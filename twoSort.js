/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, 
and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.
You should not remove or add elements from/to the array.

P: you will be given an array of strings
R: You must sort the given array alphabetically (case-sensitive, 
and based on the ASCII values of the chars) and then return the first value with "***" between each letter.
E: 
twoSort([
  "bitcoin",
  "take",
  "over",
  "the",
  "world",
  "maybe",
  "who",
  "knows",
  "perhaps",
]); //, 'b***i***t***c***o***i***n' );
P:
create a function that takes in an array
sort the array using sort()
grab the firt element
split it
join it with a space inbetween
replace all space with '***'
return 
*/
function twoSort(s) {
  let sort = s.sort();
  return sort[0].split("").join(" ").replaceAll(" ", "***");
}

twoSort([
  "bitcoin",
  "take",
  "over",
  "the",
  "world",
  "maybe",
  "who",
  "knows",
  "perhaps",
]); //, 'b***i***t***c***o***i***n' );
twoSort([
  "turns",
  "out",
  "random",
  "test",
  "cases",
  "are",
  "easier",
  "than",
  "writing",
  "out",
  "basic",
  "ones",
]); //, 'a***r***e');

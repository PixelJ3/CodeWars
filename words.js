/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

P: you will be given a string with random words repeated
R: write a function that removes all duplicate words from a string, leaving only single (first) words entries.
E:
Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
Output:
'alpha beta gamma delta' 
P:
create a function that takes in a string
split the string into an array
using new Set(), create an object that removes the repeats 
turn the object back into an array
join the array(' ') 
return output
*/

function words(str) {
  let arr = new Set(str.split(" "));
  return [...arr].join(" ");
}

words(
  "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
);

// output:
//'alpha beta gamma delta'

/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

P: you will be given a string with a random name 
R: Return the output should be two capital letters with a dot separating them.
E: 
Sam Harris => S.H
patrick feeney => P.F

P: 
create a function that takes in a string of names
split the name
then with map, uppercase the first letter of every word
then join them with a period inbetween
return 
 

*/

function abbrevName(name) {
  return name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}

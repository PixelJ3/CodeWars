/* 
Given a string or number write a function tea42 that takes as input a string or number and returns a 
string where every '2' charcter or digit has been replaced with a t.

P: you will be given an input of strings and numbers
R: replace all 2 with 't'
E: 
tea42('coffee') //should return 'coffee'
tea42('tea') //should return 'tea'
tea42('2ea') //should return 'tea'
tea42(9022) //should return '90tt'
tea42(5676765) //should return '5676765'
tea42('2u2u') //should return 'tutu'
P: 
create a function that takes in an input
using String(), turn the intput into a string
using .replace(), replace all 2 with 't'
return output
*/

function tea42(input) {
  let string = String(input);
  return string.replaceAll("2", "t");
}

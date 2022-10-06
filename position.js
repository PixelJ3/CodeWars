/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"



P: you will be given a random letter from the alphabet 
R: return the index of the requested letter
E: 
Input :: "a"

Ouput :: "Position of alphabet: 1"

P: 
create a function that takes a random letter
create a const that has the alphabet stored in it
using IndexOf find the requested letter
add 1 to the index
return number

*/

function position(letter) {
  const ABC = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return `Position of alphabet: ${ABC.indexOf(letter) + 1}`;
}

position("z"); //returned output: 'Position of alphabet: 26'
position("s"); //returned output: 'Position of alphabet: 19'
position("a"); //returned output: 'Position of alphabet: 1'

/*
Write a function that returns a string in which firstname is swapped with last name.

P: you will be given a string name
R: return a string in which firstName and is swapped with laseName
E: 
nameShuffler("john McClane"); //'McClane john'
P:
create a function that takes in a string name
split the string into seperate words
reverse the array
join the array
return the string

*/
function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

nameShuffler("john McClane"); //'McClane john'
nameShuffler("Mary jeggins"); //'jeggins Mary'
nameShuffler("tom jerry"); //'jerry tom'

/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

P: you will be given 2 parameters with an int
R: return an array of all ints between the input parameters, including them
E: 
between(1, 4)       //expected output: [1, 2, 3, 4]
between(-2, 2)      //expected output: [-2, -1, 0, 1, 2]
P: 
create a function that takes in two parameter
create an empty arr
for loop starting at paramter a and ending at parameter b
while pushing all looped elements into the created array
return the array
*/

function between(a, b) {
  let arr = [];
  for (let i = a; i < b + 1; i++) {
    arr.push(i);
  }
  return arr;
}

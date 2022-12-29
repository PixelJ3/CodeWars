/*
Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)

P: you will be given an array
R: create a function that reverses an anrray without using the reverse() Method
E: 
  reverse([1, 2, 3]); //, [3,2,1] )
  reverse([1, null, 14, "two"]); //, ["two",14,null,1] )
P:
create a function that takes in an array
create an empty variable
using a while loop, push each element into the empty array 
while poping the given array
return ouput 

*/
function reverse(array) {
  var output = [];
  while (array.length) {
    output.push(array.pop());
  }

  return output;
}

reverse([1, 2, 3]); //, [3,2,1] )
reverse([1, null, 14, "two"]); //, ["two",14,null,1] )

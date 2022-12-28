/*
You will be given an array and a limit value. You must check that all values in 
the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
 
P: you will be given an array and a limit value
R: create a function that checks that all values in the array are below or equal to the limit value, if they are then return true.
else return false
E: 
// smallEnough([66, 101], 200); //, true
P:
create a function that takes in an array and a limit value
using Math.max, find out what is the max of the given array
if its less than or equal to the limit, return true
else return false
*/
//solution:
function smallEnough(a, limit) {
  return Math.max(...a) <= limit;
}

// smallEnough([66, 101], 200); //, true
// smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100); //, false
// smallEnough([101, 45, 75, 105, 99, 107], 107); //, true
// smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120); //, true

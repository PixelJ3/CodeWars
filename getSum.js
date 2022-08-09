/* 
Given two integers a and b, which can be positive or negative, find the
sum of all the integers between and including them and return it. If the two 
numbers are equal return a or b.

Note: a and b are not ordered!

P: Given two integers a and b, which can be positive or negative
R: return the sum all of the integers between the given numbers
if the two numbers are equal return a or b
E: 
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

P: 
create a function that takes in two intergers
if a = b then return one of them 
or else then loop from a to b, adding all the intergers inbetween  
then return 
*/

function getSum(a, b) {
  if (a == b) {
    return a;
  } else if (a < b) {
    return a + getSum(a + 1, b);
  } else {
    return a + getSum(a - 1, b);
  }
}

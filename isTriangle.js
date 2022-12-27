/*
Implement a function that accepts 3 integer values a, b, c. The function should return true if a 
triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

P: you will be given 3 random numbers for the parameter
R: create a function that accepts 3 integers and return true if a triangle can be built with the sides of given length
and false in any other case.
E:
isTriangle(0,2,2) //false
P:
create a function that takes in 3 parameters
if 
a < b + c &&
b < a + c && 
c < b + a
return true 
else return false
*/
// function isTriangle(a,b,c)
// {
//   if(a==0||b==0||c==0){
//     return false
//   } else {
//     return a<b+c && b<a+c && c<b+a
//     }
//   }

const isTriangle = (a, b, c) => a < b + c && b < a + c && c < b + a;

isTriangle(1, 2, 2); // true
isTriangle(7, 2, 2); // false
isTriangle(0, 2, 2); // false
isTriangle(5, 1, 9); // false
isTriangle(2, 6, 5); // true
isTriangle(9, 4, 6); // true

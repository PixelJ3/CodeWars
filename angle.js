/*
Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

P: you will be given a random number that is greater than 2
R: return the sum of internal angles (in degrees) in an n-sided simple polygon
E: 
n = 3 => 180
n = 4 => 360
P: 
create a function that takes in a number(n)
subtract 2 from n
Multiply total 180
return product

*/

function angle(n) {
  return (n - 2) * 180;
}

//one liner:
const angle = (n) => (n - 2) * 180;

angle(3); //180
angle(4); //360

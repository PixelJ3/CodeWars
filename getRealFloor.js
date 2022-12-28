/*
Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to 
take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.

P: you will be given a number
R: create a function that when given a floor number in the American system, it returns the floor number in the European system.
E:
getRealFloor(4) // 3
P:
create a function that takes in a number(n)
if n is less than or equal to 0, return n
if n is less than or equal to 12, return n - 1
if n is greater than 12, return n - 2

*/
function getRealFloor(n) {
  if (n <= 0) {
    return n;
  } else if (n <= 12) {
    return n - 1;
  } else {
    return n - 2;
  }
}

getRealFloor(1); //,  0
getRealFloor(5); //,  4
getRealFloor(15); //, 13
getRealFloor(-2); //, -2

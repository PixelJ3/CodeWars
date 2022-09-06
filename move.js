/*
In this game, the hero moves from left to right. The player rolls 
the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current
position of the hero and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15

P: you will be given a set of numbers (2 nums)
R: return the new position by adding the given parameter and multiplying by 2
E: 
move(0,4) //8
move(3,6) //15
move(2,5) //12
P: 
create a function that takes in 2 parameters (position, roll)
add position + roll
multiply by 2
return total
*/

function move(position, roll) {
  return position + roll * 2;
}

const move = (position, roll) => position + roll * 2;

move(0, 4); // 8
move(3, 6); // 15
move(2, 5); // 12

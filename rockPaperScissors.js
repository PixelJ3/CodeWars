/*
Let's play! You have to return which player won! In case of a draw return Draw!.

P: you will be given 2 parameters (p1,p2)
R: return the winner of the PRS game or draw
E:
Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

P:
create a function that takes in 2 parameters
if p1 = p2, return draw
if p = scissors && p2 = paper 
or p1 = paper && p2 = rock
or p1 = rock && p2 = scissors
return 'p1 won'!
else return 'p2 won!'
*/

const rps = (p1, p2) => {
  if (p1 == p2) {
    return "Draw!";
  }
  if (
    (p1 == "scissors" && p2 == "paper") ||
    (p1 == "paper" && p2 == "rock") ||
    (p1 == "rock" && p2 == "scissors")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

/*
You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone 
and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). 
It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

P:you will be given an array
R: create a function that flips the array around
E: 
  fixTheMeerkat(["tail", "body", "head"]); =>  ["head", "body", "tail"]
P:
create a function that takes in an array
reverse the array
return output
*/
function fixTheMeerkat(arr) {
  return arr.reverse();
}

fixTheMeerkat(["tail", "body", "head"]); // ["head", "body", "tail"]
fixTheMeerkat(["tails", "body", "heads"]); // ["heads", "body", "tails"]
fixTheMeerkat(["bottom", "middle", "top"]); // ["top", "middle", "bottom"]
fixTheMeerkat(["lower legs", "torso", "upper legs"]); // ["upper legs", "torso", "lower legs"]
fixTheMeerkat(["ground", "rainbow", "sky"]); // ["sky", "rainbow", "ground"]

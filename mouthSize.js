/*
The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the 
alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method takes one argument 
animal which corresponds to the animal encountered by the frog. If this one is 
an alligator (case-insensitive) return small otherwise return wide.

P: you will be given a random string(animal)
R: create a function that when given the string "alligator" it returns "small", else it returns "wide"
E:
mouthSize("alligator")// "small"
mouthSize("cat") // "wide"
P:
create a function that takes in a string
using toLowerCase, lets makes sure every input is lowercased
if the given animal is equal to alligtor, return small 
any thing else, return wide
*/
// function mouthSize(animal) {
//   if(animal.toLowerCase() == "alligator"){
//     return "small"
//   } else {
//     return "wide"
//   }
// }

//arrow function:
const mouthSize = (animal) =>
  animal.toLowerCase() == "alligator" ? "small" : "wide";

mouthSize("toucan"); // "wide"
mouthSize("ant bear"); // "wide"
mouthSize("alligator"); // "small"

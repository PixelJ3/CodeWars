/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.



P:random names will be given. starting with any letters
R: return 'name' plays banjo if name starts with r or R
if not then return 'name' does not play banjo
E:
("Adam"), "Adam does not play banjo"
("Paul"), "Paul does not play banjo"
("Ringo"), "Ringo plays banjo"
("bravo"), "bravo does not play banjo"
("rolf"), "rolf plays banjo"
P:
create a function that takes in a name 
then checks if the string (name) starts with a r or R 
if so return name plays banjo 
if not then return name does not play banjo

*/

function areYouPlayingBanjo(name) {
  if (name.startsWith("r") || name.startsWith("R")) {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}

areYouPlayingBanjo("Adam"); //"Adam does not play banjo"
areYouPlayingBanjo("Paul"); //"Paul does not play banjo"
areYouPlayingBanjo("Ringo"); // "Ringo plays banjo"
areYouPlayingBanjo("bravo"); // "bravo does not play banjo"
areYouPlayingBanjo("rolf"); //"rolf plays banjo"

//in one line:
const areYouPlayingBanjo = (name) =>
  name.startsWith("r") || name.startsWith("R")
    ? `${name} plays banjo`
    : `${name} does not play banjo`;

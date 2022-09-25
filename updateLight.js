/*
You're writing code to control your town's traffic lights. You need a function 
to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current 
state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.


P: you will be given one of three different strings: 'red', 'yellow', or 'green' 
R: return the string representing the state the light should change to 
E: 
    'Yellow' => 'Red'
    'Green' => 'Yellow'
P:
create a function that takes in a string
if current is green return yellow
if current is yellow return red
if current is red return green
*/
function updateLight(current) {
  if (current == "green") {
    return "yellow";
  } else if (current == "yellow") {
    return "red";
  } else if (current == "red") {
    return "green";
  }
}

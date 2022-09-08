/* 
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'

P: you will be given 2 parameters 
R: return a message if the 2 parameters match eachother
E: 
    greet("Daniel", "Daniel"); //'Hello boss'
    greet("Greg", "Daniel"); //'Hello guest'
P:
create a function that takes in 2 parameters
if name === owner name return 'Hello boss';
else return 'Hello guest';
*/
function greet(name, owner) {
  if (name == owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

//in one line:
const greet = (name, owner) => (name == owner ? "Hello boss" : "Hello guest");

greet("Daniel", "Daniel"); // Expected output: 'Hello boss'
greet("Greg", "Daniel"); // Expected output: 'Hello guest'

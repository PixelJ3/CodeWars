/*
The starship Enterprise has run into some problem when creating a program to greet everyone as 
they come aboard. It is your job to fix the code and get the program working again!

Example output:

Hello, Mr. Spock
*/

//Original code:
function sayHello(name) {
  return "Hello ";
}

//debugged output:
// We used a Template Literal to insert the given name into the string.
function sayHello(name) {
  return `Hello, ${name}`;
}

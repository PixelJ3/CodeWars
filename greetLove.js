/*
Jenny has written a function that returns a greeting for a user. However, she's in love 
with Johnny, and would like to greet him slightly different. She added a 
special case to her function, but she made a mistake.

Can you help her?


P: you will be given a string(name)
R: if name === "Johnny", return "Hello, my love"
else return "hello, (name)!"
E: 
greet("Jim"); => "Hello, Jim!");
greet("Jane"); => "Hello, Jane!");
greet("Simon"); => "Hello, Simon!");
greet("Johnny"); => "Hello, my love!"
P:
create a function that takes in a string
if name === "Johnny", return "Hello, my love"
else return "hello, (name)!"
*/

function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  } else {
    return `Hello, ${name}!`;
  }
}

greet("Jim"); //, "Hello, Jim!");
greet("Jane"); //, "Hello, Jane!");
greet("Simon"); //, "Hello, Simon!");
greet("Johnny"); //, "Hello, my love!"

/*
Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. 
Note that name will be an array consisting of one or more values that should be joined together with one space 
between each, and the length of the name array in test cases will vary.

P: you will be given an array with a first and last name.
R: return the given parameters in a full sentence
E: 
  sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')                   //expected outcome: 'Hello, John Smith! Welcome to Phoenix, Arizona!'
  sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois')  //expected outcome: 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!'
  sayHello(['Wallace','Russel','Osbourne'],'Albany','New York')       //expected outcome: 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!'

P: 
create a function that takes in an array. 
then create a variable that'll join the name array. 
then return the sentence using said array.*/
function sayHello(name, city, state) {
  let fullName = name.join(" ");
  return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
}

//in one line:
const sayHello = (name, city, state) =>
  `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;

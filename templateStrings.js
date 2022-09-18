/* 
Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
Task
Your task is to return the correct string using the Template String Feature.
Input
Two Strings, no validation is needed.
Output
You must output a string containing the two strings with the word ```' are '```

P: you will be given 2 parameters 
R: return the correct string using the Template String Feature
E: 
(dogs, animals) // "dogs are animals"
P: 
create a function that takes in 2 parameters
using a template literal, return the string 
*/
var TempleStrings = function (obj, feature) {
  return `${obj} are ${feature}`;
};

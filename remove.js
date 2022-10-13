/*
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume 
that the input data is always a string, no need to verify it.

P: you will always be given a string as the parameter.
R: return the string with an exclamation mark from the end removed.
E: 
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"
P: 
create a function that takes in an array
turn the string into an array and store it in a variable
if the last index is a '!', remove it by using pop()
join and return string
else if the last index is not a '!'
return string as is

*/

function remove(string) {
  let arr = [...string];
  if (arr[arr.length - 1] == "!") {
    arr.pop();
  } else {
    return arr.join("");
  }
  return arr.join("");
}

remove("Hi!"); // "Hi"
remove("Hi!!!"); // "Hi!!"
remove("!Hi"); // "!Hi"
remove("!Hi!"); // "!Hi"
remove("Hi! Hi!"); // "Hi! Hi"
remove("Hi"); // "Hi"

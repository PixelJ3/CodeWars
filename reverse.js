/*
You need to write a function that reverses the words in a given string. A word can 
also fit an empty string. If this is not clear enough, here are some examples:
As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

P: you will be give a string of words.
R: reverse the words in a given string.
E: 
    "Hello World" --> "World Hello"
    "Hi There." --> "There. Hi"
P:
create a function that takes in a string.
split the string
reverse the array
join the array into a string
return 
*/

function reverse(string) {
  return string.split(" ").reverse().join(" ");
}

//in one line:
const reverse = (string) => string.split(" ").reverse().join(" ");

reverse("I am an expert at this");
reverse("This is so easy");
reverse("no one cares");
reverse("");
reverse("CodeWars");

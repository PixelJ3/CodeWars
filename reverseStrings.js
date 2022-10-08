/* 
Complete the solution so that it reverses all of the words within the string passed in.

P: you will be given a string of words  
R: create a function that return the given sentence reversed 
E: "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
P: 
create a function that takes in a string
split the string
reverse the string
join the string
return string
*/

// function reverseWords(str){
//   return str.split(' ').reverse().join(' ')
// }

const reverseWords = (str) => str.split(" ").reverse().join(" ");

reverseWords("yoda doesn't speak like this");
reverseWords("foobar");
reverseWords("kata editor");
reverseWords("row row row your boat");

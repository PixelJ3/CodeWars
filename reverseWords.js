/* 
Complete the function that accepts a string parameter, and reverses each 
word in the string. All spaces in the string should be retained

P: you will be given a random string  
R: return the str backwards
E: 
    reverseWords('The quick brown fox jumps over the lazy dog.')    //returns: 'ehT kciuq nworb xof spmuj revo eht yzal .god'
    reverseWords('apple')       //returns: 'elppa'
    reverseWords('double  spaced  words')   //returns: 'elbuod  decaps  sdrow'
P: 
create a function that takes in a str
then make it into a array 
reverse array
join array
then redo once more
then return str
*/

function reverseWords(str) {
  let strArr = str.split("").reverse().join("");
  let finalStr = strArr.split(" ").reverse().join(" ");

  return finalStr;
}

//rewritten to 1 line of code
let reverseWords = (str) =>
  str.split("").reverse().join("").split(" ").reverse().join(" ");

reverseWords("apple"); //returns: 'elppa'
reverseWords("The quick brown fox jumps over the lazy dog."); //returns: 'ehT kciuq nworb xof spmuj revo eht yzal .god'
reverseWords("double  spaced  words"); // returns: 'elbuod  decaps  sdrow'

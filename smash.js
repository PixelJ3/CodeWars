/*
Write a function that takes an array of words and smashes them together 
into a sentence and returns the sentence. You can ignore any need to sanitize 
words or add punctuation, but you should add spaces between each word. Be 
careful, there shouldn't be a space at the beginning or the end of the sentence!

P: you will be given an array of words 
R: join the array and return the sentence
E: 
    smash(["hello", "world"])    //expected output: "hello world"
    smash(["hello", "amazing" , "world"])    //expected output: "hello amazing world"
    smash(["this", "is", "a", "really", "long", "sentence"]) //expected output: "this is a really long sentence"
P:
create a function that takes in an array
join array with space inbetween each word 
return sentence 
*/

const smash = (words) => words.join(" ");

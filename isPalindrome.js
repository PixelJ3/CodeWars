/*
Write a function that checks if a given string (case insensitive) is a palindrome.

P: you will be given a string 
R: write a function that checks if the given string (case insensitive) is a palindrome.
E: 
max = xam : False
mom = mom : True
P:
create a function that takes in a string 
lowercase it using tolowercase()
split the string into an array
reverse the array
join the array
compare reversed string with original string lowercased

if they match return true
else return false
*/

// function isPalindrome(x) {
//   return x.toLowerCase() == x.toLowerCase().split('').reverse().join('')
// }

const isPalindrome = (x) =>
  x.toLowerCase() == x.toLowerCase().split("").reverse().join("");

isPalindrome("a"); // true
isPalindrome("aba"); // true
isPalindrome("Abba"); // true
isPalindrome("hello"); // false
isPalindrome("Bob"); // true
isPalindrome("Madam"); // true
isPalindrome("AbBa"); // true
isPalindrome(""); // true

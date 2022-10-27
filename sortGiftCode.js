/*
Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique 
alphabetical character to each gift. After each gift was assigned a character, the gift organizer
Elf then joined the characters to form the gift ordering code.

Santa asked his organizer to order the characters in alphabetical order, but the Elf fell
asleep from consuming too much hot chocolate and candy canes! Can you help him out?

Sort the Gift Code
Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing 
up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

P: you will be given a string with letters
R: Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing 
up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.
E; (Input -- => Output):
"abcdef"                      -- => "abcdef"
"pqksuvy"                     -- => "kpqsuvy"
"zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"
P: 
create a function that takes in a string
split the string into an array
sort the array using the sort method
join the array 
return output
*/

function sortGiftCode(code) {
  return code.split("").sort().join("");
}

//One liner:
const sortGiftCode = (code) => code.split("").sort().join("");

sortGiftCode("zyxwvutsrqponmlkjihgfedcba");

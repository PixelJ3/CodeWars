/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6"

P: you will be given an array
R: return the position(index) of the needle found at
E: 
["test", "bob","nope", "be","needle", "yes"] // "needle found at position 4"
P:
create a function that takes in an array
find the index of "needle" using indexOf()
insert it into a template litteral 
return string
*/
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}

findNeedle([
  "3",
  "123124234",
  undefined,
  "needle",
  "world",
  "hay",
  2,
  "3",
  true,
  false,
]); //'found the needle at position 3'

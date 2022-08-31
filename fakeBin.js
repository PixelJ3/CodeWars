/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 
5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
P: you will be given a string of digits
R: replace any digit below 5 with '0' and any digit 5 and above with '1'. 
E: '13597392811' -> '00111010100'
P: 
create a function that takes in a str
create an empty function
split the given array
with a for loop, loop through each element in the arr
if element has a value of 5 or higher push 1 to arr
else push 0 
join arr
return; 

*/
function fakeBin(x) {
  let binaryarr = [];
  let arr = x.split("");
  for (let i = 0; i < arr.length; i++)
    if (arr[i] < 5) {
      binaryarr.push(0);
    } else {
      binaryarr.push(1);
    }
  return binaryarr.join("");
}

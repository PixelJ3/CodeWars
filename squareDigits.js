/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer

P: you will be given a random number as the parameter
R: create a function that squares every digit of a number and concatenates them.
E:
squareDigits(9119) => 811181, because 92 is 81 and 12 is 1.
P: 
create a function that takes in a number
split the number into a string array
map the string array into a number array
map the array while multiplying each element with itself
return output
*/
function squareDigits(num) {
  const strarr = String(num).split("");
  let arr = strarr.map(Number);
  return Number(arr.map((x) => x * x).join(""));
}

squareDigits(3212); // 9414
squareDigits(2112); // 4114
squareDigits(0); // 0

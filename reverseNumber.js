/*
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)
Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

P: you will be given a random number
R: write a function that reverses the given number, including negative
E:
123 ->  321
-456 -> -654
1000 ->    1
P: 
create a function that takes in a number
turn number into a string
if the number is negative, turn it positive(* -1 )
split the str
reverse
join 
then multiply -1 to turn it back into a negative; 
if the num is positive do the same without multiplying -1
return output
*/

function reverseNumber(n) {
  if (n < 0) {
    return parseInt(
      String(n * -1)
        .split("")
        .reverse()
        .join("") * -1
    );
  } else {
    return parseInt(String(n).split("").reverse().join(""));
  }
}

reverseNumber(123); //, 321)
reverseNumber(-123); //, -321, 'Negative Numbers should be preserved')
reverseNumber(1000); //, 1, 'Should handle numbers ending with "0"')
reverseNumber(4321234); //, 4321234)
reverseNumber(5); //, 5)
reverseNumber(0); //, 0)
reverseNumber(98989898); //, 89898989)

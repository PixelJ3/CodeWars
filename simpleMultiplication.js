/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

P: You will be given a random number.
R: return the number multiplied by 8 if given number is even. else multiplied by 9
E: 
    simpleMultiplication(2)     //expected output 16
    simpleMultiplication(1)     //expected output 9
    simpleMultiplication(8)     //expected output 64
    simpleMultiplication(4)     //expected output 32
    simpleMultiplication(5)     //expected output 45
P:
create a function that takes in a number
if the number is odd (n % 2 === 0)
then multiply number by 8
else multiply number by 9
return
*/

function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}

//in one line:
const simpleMultiplication = (number) =>
  number % 2 === 0 ? number * 8 : number * 9;

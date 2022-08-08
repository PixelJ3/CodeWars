/*
Write a program that finds the summation of every number from 1 to num. The number will 
always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

P: you will be given a random number
R: the summation of every number from 1 to num
E: 
    summation(2) -> 3
    1 + 2

    summation(8) -> 36
    1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

P: 
create a function that will take in a number
create a while loop that stops at given number while adding every passing number
return sum

*/

function summation(num) {
  let n = 0;
  let x = 0;
  while (n < num) {
    n++;
    x += n;
  }
  return x;
}

summation(8); //expected output: 36

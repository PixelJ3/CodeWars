/*
We want to generate a function that computes the series starting from 0 and ending until the given number.

P: you will be given a random number, it can be positive or negative
R: write a function that computes the series starting from 0 and ending until the given number. 
E:
Input:
> 6
Output:
0+1+2+3+4+5+6 = 21

Input:
> -15
Output:
-15<0

Input:
> 0
Output:
0=0
P:
create a function that takes in a number (positive or negative)
if the count is lower than 0
return 'count<0'
if the count is equal to 0
return '0=0'
else if count is higher than 0
create an empty arr
using a for loop, push all number inbetween 0 and the given number
store this array as arr
reduce array and store it in 'sum' var
using String create a seperate var 'str' that stores the arr as a string
replace all "," with '+'
return 'str = sum'

*/
function showSequence(count) {
  if (count < 0) {
    return `${count}<0`;
  } else if (count == 0) {
    return `0=0`;
  } else {
    let arr = [];
    for (let i = 0; i < count + 1; i++) {
      arr.push(i);
    }
    let str = String(arr).replace(/,/g, "+");
    return `${str} = ${arr.reduce((a, b) => a + b)}`;
  }
}

showSequence(6); // output: '0+1+2+3+4+5+6 = 21'

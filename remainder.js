/*
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
Division by zero should return NaN.

P: you will be given 2 numbers
R: Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
Division by zero should return NaN.
E: 
n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language)
P: 
create a function that takes in 2 numbers
if n is bigger than m, return n % m
if m is bigger than n, return m % n
if n and m is equal to 0, return NaN
if n and m is less than 0, return 0

*/
function remainder(n, m) {
  if (n > m) {
    return n % m;
  } else if (n < m) {
    return m % n;
  } else if (n == 0 || m == 0) {
    return NaN;
  } else if (n < 0 || m < 0) {
    return 0;
  }
}

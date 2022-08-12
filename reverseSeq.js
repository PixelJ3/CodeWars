/*
Build a function that returns an array of integers from n to 1 where n>0.

P:  you'll be given a random number 
R: return an array of integers from the given number to 1
E: 
    n=5 --> [5,4,3,2,1]
    n=20--> [ 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
P: 
create a function that takes in an array
create an empty array
for loop from 1 to n while unshifting numbers to empty array
return

*/
function reverseSeq(n) {
  const arr = [];
  for (let i = 1; i < n + 1; i++) {
    arr.unshift(i);
  }
  return arr;
}

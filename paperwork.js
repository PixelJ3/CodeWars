/* 
Your classmates asked you to copy some paperwork for them. 
You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

P: you will be given two different numbers, positive or negative 
R: return the product of the two given numbers if they are positive, or if either one is negative return 0.
E: 
paperwork(5,-5) //0
paperwork(5,5) //25
P: 
create a function that takes in two parameters
if n or m is less than 0 return 0
else multiply n * m
return product

*/

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return n * m;
  }
}

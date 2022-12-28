/*
We need a simple function that determines if a plural is needed or not. It should take a number, 
and return true if a plural should be used with that number or false if not. This would be useful 
when printing out a string such as 5 minutes, 14 apples, or 1 sun.

You only need to worry about english grammar rules for this kata, where anything that isn't singular 
(one of something), it is plural (not one of something).

All values will be positive integers or floats, or zero.

P: you will be given a random number
R: create a simple function that determines if a plural is needed or not. It should take a number, 
and return true if a plural should be used with that number or false if not.
E:
plural(2) // true
plural(13) // true
plural(1) //false
P:
create a function that takes in a number 
if the number is equal to 1, return false 
anything else, return true
*/
function plural(n) {
  if (n == 1) {
    return false;
  } else {
    return true;
  }
}

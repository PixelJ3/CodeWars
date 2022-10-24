/*
Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that 
determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, i.e. the result of 
exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.

P: you will be given a random number(int)
R: write a function power_of_two/powerOfTwo (or equivalent, depending on your language) that 
determines if a given non-negative integer is a power of two.
E:
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false

!!!
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.
!!!

P:
create a function that takes in a number 
if n == 0
return false
if n == 1
return true
else 
find the exponent by reverse Math.pow: exp = Math.round(Math.log(a) / Math.log(b))
compare Math.pow(2,(given exponent from previouse line)) to given int(n)
return

*/

function isPowerOfTwo(n) {
  if (n == 0) {
    return false;
  } else if (n == 1) {
    return true;
  } else {
    let exp = Math.round(Math.log(n) / Math.log(2));
    return Math.pow(2, exp) == n;
  }
}

isPowerOfTwo(0); //,false)
isPowerOfTwo(1); //, true)
isPowerOfTwo(2); //, true)
isPowerOfTwo(4096); //, true)
isPowerOfTwo(234); //, false)

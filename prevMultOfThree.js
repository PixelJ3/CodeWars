/* 
Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.

Examples
1      => null
25     => null
36     => 36
1244   => 12
952406 => 9 


P: is there any negative numbers given? any floats? 
R: return n if the input is already a multiple of 3, else return null
E: 

    1      => null
    25     => null
    36     => 36
    1244   => 12
    952406 => 9

P:   */
const prevMultOfThree = (n) => {
  while (n % 3 != 0) {
    // first off we are starting with a while loop, The loop will stop before n is equal to 0
    n = Math.floor(n / 10); // here we will loop by dividing 10 every loop until,
    if (n < 1) return null; // n is smaller than 1, if n IS smaller than 1 then it will return 'null'
  }
  return n; // if n IS greater than zero of the final divide then it will be returned.
};

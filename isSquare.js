/*
A square of squares
You like building blocks. You especially like building blocks that are squares. 
And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with 
an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're 
currently working in vain… Wait! That's it! You just have to check if your 
number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square 
of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

P: you will be given a random number
R: return true or false if the given number is a square
E: 
-1  => NaN => false
0  => 0 =>  true
3  => 1.73 => false
4  => 2 => true
25  => 5 => true
26  => 5.099 => false
P: 
create a function that takes in a number
square root the given number
compare it to math.floor(Math.sqrt(n))
if they match return true
else return false

*/
function isSquare(n) {
  return Math.sqrt(n) == Math.floor(Math.sqrt(n));
}

// in one line:
const isSquare = (n) => Math.sqrt(n) == Math.floor(Math.sqrt(n));

isSquare(-1); //false
isSquare(0); // true
isSquare(3); // false
isSquare(4); // true
isSquare(25); // true
isSquare(26); // false

/*
Create a function with two arguments that will return an array of the first (n) multiples of (x).
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array (or list in Python, Haskell or Elixir).
Examples:
countBy(1,10) // [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) 	// [2,4,6,8,10]

P:two parameters will be given
R: return an array by the multiples of x
E:
countBy(1,10) // [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) 	// [2,4,6,8,10]

P: 
create a function that takes in x and n
create a loop that ends on n 
increases amount of x

for (i=x; i<=n*x: i=i+x){
    add to array
}

return array*/

function countBy(x, n) {
  let z = [];
  for (i = x; i <= n * x; i = i + x) {
    z.push(i);
  }
  return z;
}
countBy(1, 10); // [1,2,3,4,5,6,7,8,9,10]
countBy(2, 5); // [2,4,6,8,10]

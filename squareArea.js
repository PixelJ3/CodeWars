/*
Complete the function that calculates the area of the red square, when the length of 
the circular arc A is given as the input. Return the result rounded to two decimals.

P: you will be given a random number
R: create a function that calculates the area of a square, when the length of 
the circular arc A is given as the input. Return the result rounded to two decimals.
E:
squareArea(2); //1.62
*/
function squareArea(A) {
  let a = A / (2 * Math.PI * (90 / 360));
  let area = Math.pow(a, 2);
  return Number(area.toFixed(2));
}

squareArea(14.05); //80
squareArea(0); //0
squareArea(2); //1.62

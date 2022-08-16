/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

P: you will be given the classPoints(an array with random numbers) and yourPoints(a random number)
R: return true if yourPoints is greater than the average classPoints, else return false
E: 
betterThanAverage([2, 3], 5); // true
betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75); // true
betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9); // false
betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50); // false
betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21); // false
betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21); // false
P: 
create a function that takes in two parameters (an array, a random num)
get average by reducing array and dividing by arr length
if average > yourpoints 
return true
else return false
*/

function betterThanAverage(classPoints, yourPoints) {
  let average = classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
  if (average < yourPoints) {
    return true;
  } else {
    return false;
  }
}

// in one line:
const betterThanAverage = (classPoints, yourPoints) =>
  classPoints.reduce((a, b) => a + b, 0) / classPoints.length < yourPoints;

betterThanAverage([2, 3], 5); // expected output: true
betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75); //expected output: true
betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9); //expected output: false
betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50); //expected output: false
betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21); //expected output: false
betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21); //expected output: false

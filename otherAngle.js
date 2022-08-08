/*
You are given two interior angles (in degrees) of a triangle.
Write a function to return the 3rd.

 Note: only positive integers will be tested.

P: are there any negative numbers given? are there any floats used?
R: Return the third angle degree
E: 
    otherAngle(30, 60), 90);
    otherAngle(60, 60), 60);
    otherAngle(43, 78), 59);
    otherAngle(10, 20), 150);

P: write a function that takes in the two given angles 

*/
function otherAngle(a, b) {
  //     add the two angles
  let c = a + b;
  //     subtract the sum from 180
  return 180 - c; //     then return the total
}

// re-written to one line:
const otherAngle = (a, b) => 180 - (a + b);

console.log(otherAngle(30, 60)); //expected output: 90
console.log(otherAngle(60, 60)); //expected output: 60
console.log(otherAngle(43, 78)); //expected output: 59
console.log(otherAngle(10, 20)); //expected output: 150

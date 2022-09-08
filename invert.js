/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

You can assume that all values are integers. Do not mutate the input array/list.

P: you will be given an array with random numbers
R: return the additive inverse of each number. positive => negative, negative => positive
E: 
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
P: 
create a function that takes in an array
use the map method to create a new array while multiplying each element by -1
return results
*/

function invert(array) {
  return array.map((e) => e * -1);
}

const invert = (array) => array.map((e) => e * -1);

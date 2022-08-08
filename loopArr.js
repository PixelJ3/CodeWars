/* 
Write a function loopArr that loops array in a specified direction by some number of steps.

By "looping array" it means removing elements from start and adding them to end of array one-by-one (if direction is "left") or 
removing from end and adding them to start one by-one (if direction is "right").

Function should accept three arguments:

array - non-empty array of elements of any type;
direction - 'left' or 'right' - tells how to loop array;
steps - number of steps to loop array (less or equal to array size);
Examples:

loopArr([1, 5, 87, 45, 8, 8], 'left', 2);
should produce result: [87, 45, 8, 8, 1, 5]

loopArr([1, 5, 87, 45, 8, 8], 'right', 2);
should produce result: [8, 8, 1, 5, 87, 45]

*******************************************************

P (parameters): are there multiple arrays at once? just reorganizing an array from requested order
R (return): the output should match the requested order
E (examples):

loopArr([1, 5, 87, 45, 8, 8], 'left', 2);
should produce result: [87, 45, 8, 8, 1, 5]

loopArr([1, 5, 87, 45, 8, 8], 'right', 2);
should produce result: [8, 8, 1, 5, 87, 45]


P (psuedo code):
create a function that takes in an Array
if direction is left then the array elements should decrease
if direction is right then the array elements should increase */

function loopArr(arr, direction, steps) {
  //creating a function with three parameters

  for (let i = 0; i < steps; i++) {
    // creating a loop that goes through the array on by one
    if (direction === "right") {
      // if the array direction is equal to 'Right' then
      arr.unshift(arr.pop()); // we are removing the final element of an array and adding it to the beggining
    }
    if (direction === "left") {
      //if the array direction is equal to 'Left' then
      arr.push(arr.shift()); //we are removing the first element of an array and adding it to the end
    }
  }
  return arr;
}

loopArr([1, 5, 87, 45, 8, 8], "left", 2);
// should produce result: [87, 45, 8, 8, 1, 5]

loopArr([1, 5, 87, 45, 8, 8], "right", 2);
// should produce result: [8, 8, 1, 5, 87, 45]

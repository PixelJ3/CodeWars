/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
None of the arrays will be empty, so you don't have to worry about that!

P: you will be given an array of words
R: create a function that takes in an array and removes every second element from the array.
E: ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
P: 
create a function that takes in an array 
create an empty array
using a for loop; start at 0, go up by two until given array length
while pushing each looped element into the new array
return new array
*/

function removeEveryOther(arr) {
  let newArr = [];
  for (let i = 0; i <= arr.length - 1; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [1, 3, 5, 7, 9]
removeEveryOther(["Hello", "Goodbye", "Hello Again"]); // ['Hello', 'Hello Again']

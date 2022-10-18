/*
The two oldest ages function/method needs to be completed. It should take an array of numbers 
as its argument and return the two highest numbers within the array. 
The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include 
at least 2 items. If there are two or more oldest age, then return both of them in array format.

P: you will be given an array 
R: return the 2 largest numbers from the given array
E: 
[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]
P: 
create a function that takes in an array
sort the array a - b
splice the array and return the last 2 numbers from the array

*/
function twoOldestAges(ages) {
  return ages.sort((a, b) => a - b).splice(ages.length - 2);
}

//one liner:
const twoOldestAges = (ages) =>
  ages.sort((a, b) => a - b).splice(ages.length - 2);

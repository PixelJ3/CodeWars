/*---________________________________________________________________________________________________________________________
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior 
architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and
then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you 
to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are
multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

P: you will be given an array of numbers Negative and Positive ints
R: create a function that removes the minimum from the array 
E: 
* Input: [1,2,3,4,5], output = [2,3,4,5]
P: 
create a function that takes in an array
if the array length is more than 0:
find the minimun in array and assign it to a variable
check if array if filled 
using a for loop, loop through the array
if the number matches the min variable
splice it out
return array
else if the array is empty:
return arr
*/

function removeSmallest(numbers) {
  let minimum = Math.min.apply(null, numbers);
  if (numbers.length > 0) {
    for (i = 0; i < numbers.length; i++) {
      if (numbers[i] == minimum) {
        numbers.splice(i, 1);
        return numbers;
      }
    }
  } else {
    return numbers;
  }
}

removeSmallest([1, 2, 3, 4, 5]); //, [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
removeSmallest([5, 3, 2, 1, 4]); //, [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
removeSmallest([2, 2, 1, 2, 1]); //, [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
removeSmallest([]); //, [], "Wrong result for []");

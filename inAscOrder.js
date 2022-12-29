/*
Are the numbers in order?
In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers 
are in ascending order. An array is said to be in ascending order if there are no two adjacent 
integers where the left integer exceeds the right integer in value.

For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.

Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) 
adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

For example:

inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.

P: you will be given an array
R: create a function that returns true if the given array is in ascending order, else return false
E:
inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
P:
create a function that takes in an array
create two variables (sorted, unsorted)
join the unsorted and store it in the unsorted var
sort the array and store it in the sorted var
join the array for both var and compare (===)
return ouput 

*/
const inAscOrder = (arr) => arr.join("") === arr.sort((a, b) => a - b).join("");

inAscOrder([1, 2, 4, 7, 19]); //, true, 'The list of numbers "1, 2, 4, 7, 19" is in ascending order');
inAscOrder([1, 2, 3, 4, 5]); //, true, 'The list of numbers "1, 2, 3, 4, 5" is in ascending order');
inAscOrder([1, 6, 10, 18, 2, 4, 20]); //, false, 'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order');
inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]); //, false, 'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order')

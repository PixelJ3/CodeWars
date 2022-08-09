/* 
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty. 

P: is there any negative integers? any floats?
R: return the smallest integer
E: 
[34, 15, 88, 2]          return 2
[34, -345, -1, 100]      return -345
[78,56,232,12,8]         return 8
[78,56,232,12,18]        return 12
[78,56,232,412,228]      return 56
[78,56,232,12,0]         return 0

P: 
create a function that takes in the array 
sort the array 
return the first element
*/

class SmallestIntegerFinder {
  findSmallestInt(args) {
    //create a function that takes in the array
    return args.sort((a, b) => a - b)[0]; //sort the array, return the first element
  }
}

// in one line:
const findSmallestInt = (args) => args.sort((a, b) => a - b)[0];

findSmallestInt([34, 15, 88, 2]); //return: 2
findSmallestInt([34, -345, -1, 100]); //return: -345
findSmallestInt([78, 56, 232, 12, 8]); //return: 8
findSmallestInt([78, 56, 232, 12, 18]); //return: 12
findSmallestInt([78, 56, 232, 412, 228]); //return: 56
findSmallestInt([78, 56, 232, 12, 0]); //return: 0

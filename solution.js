/* 
Finish the solution so that it sorts the passed in array of numbers. 
If the function passes in an empty array or null/nil value then it should return an empty array.

P: you will be given an array of different numbers or a null 
R: return sorted array or if the parameter is null return an empty array
E: 
solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
P: 
create a function that takes in an array
if array if null return an empty array
else
sort the array a - b
return sorted array
*/

function solution(nums) {
  if (nums == null) {
    return [];
  } else {
    return nums.sort((a, b) => a - b);
  }
}

solution([1, 2, 3, 10, 5]); // [1,2,3,5,10]
solution(null); // []
solution([]); // []
solution([20, 2, 10]); // [2,10,20]
solution([2, 20, 10]); // [2,10,20]

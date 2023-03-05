/* Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop! 

*/


//NEW CODE:
function createArray(number){
  var newArray = [];
  
  for(let i=1; i <= number ; i++){
    newArray.push(i);
  }
  
  return newArray;
}


createArray(1) // [1]
createArray(2) // [1,2]
createArray(3) // [1,2,3]
createArray(4) // [1,2,3,4]
createArray(5) // [1,2,3,4,5]


/*
Fix the function:
I created this function to add five to any number that was passed in to it and return the new value. 
It doesn't throw any errors but it returns the wrong number.

Can you help me fix the function?
*/

//given function:
function addFive(num) {
  var total = num + 5;
  return num;
}

/*
  P: you will be given a random number
  R: return the total 
  E: addFive(5) => 10
  P:
  create a function that takes in a number
  let total = number + 5
  return total
  */
function addFive(num) {
  var total = num + 5;
  return total;
}
//one liner:
const addFive = (num) => num + 5;

/*
The Array's reverse() method has gone missing! Re-write it, quick-sharp!

When this method is called, it reverses the order of the items in the original array. 
Then then it returns that same, original array. No new arrays should need to be created to pass this kata.

P: you will be given an array as the parameter. 
R: write a function that reverses the given array
E: 
var input = [1, 2, 3, 4];
input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
input;           // == [4, 3, 2, 1]  // items reordered in the original array
P:
create a function that takes in an array
reverse the array using the reverse method
return output

*/

Array.prototype.reverse = function () {
  var arr = this.splice(0);

  while (arr.length) {
    this.push(arr.pop());
  }

  return this;
};

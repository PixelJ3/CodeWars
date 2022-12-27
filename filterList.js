/*

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

P: you will be given an array
R: create a function that takes a list of non-negatives ints and strs and return a new list with the strings filtered out.
E: 
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
P:
create a function that takes in an array
create a var that filters out the letters from the given array 
return array
*/
function filter_list(l) {
  let numbers = l.filter((element) => typeof element === "number");
  return numbers;
}

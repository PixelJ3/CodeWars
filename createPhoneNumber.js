/* 
Write a function that accepts an array of 10 integers (between 0 and 9), 
that returns a string of those numbers in the form of a phone number.

P: the parameter is an array with 10 elements 
R: return a string that constains the given array in a form of a phonenumber
E:

    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");

P:
create a function that takes in the array
splice the first three, 4-6th element, and 7-10th element
join the arrays
return them using `${}`

*/

function createPhoneNumber(numbers) {
  let array = numbers;

  let ext = array.slice(0, 3);
  ext = ext.join("");
  let first = array.slice(3, 6);
  first = first.join("");
  let last = array.slice(6, 10);
  last = last.join("");

  let phoneNumber = `(${ext}) ${first}-${last}`;
  return phoneNumber;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); //"(123) 456-7890")
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]); //"(111) 111-1111")
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); //"(123) 456-7890")

//in one line:
const createPhoneNumber = (numbers) =>
  `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers
    .slice(6, 10)
    .join("")}`;

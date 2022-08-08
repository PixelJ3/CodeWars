/*
Your task is to make a function that can take any non-negative integer as an argument and 
return it with its digits in descending order. Essentially, rearrange the 
digits to create the highest possible number.

Examples:

    Input: 42145 Output: 54421
    Input: 145263 Output: 654321
    Input: 123456789 Output: 987654321

P:Is there any negative numbers? floats? 
R:Return the number in a decending order
E:
    Input: 42145 Output: 54421
    Input: 145263 Output: 654321
    Input: 123456789 Output: 987654321

P:
create a function that takes in a number
now turn that number into an array
decend it b-a
then concat the array
return
*/

function descendingOrder(n) {
  let number = String(n).split("");
  let array = number.sort((a, b) => b - a);
  let answer = Number(array.join(""));
  return answer;
}

// can we make it shorter? yes we can
function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

// but in one line:
const descendingOrder = (n) =>
  parseInt(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );

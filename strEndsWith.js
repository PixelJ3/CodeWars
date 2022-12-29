/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

P: you will be given two strings
R: create a function that returns true if the first argument(string) passed in ends with the 2nd argument(also a string).
E:
solution("abcde", "cde"); // true
solution("abcde", "abc"); // false
P:
create a function that takes in two seperate strings
using the endWith method, check if the fist string ends with the second
return output
*/

// function solution(str, ending){
//  return str.endsWith(ending)
// }
const solution = (str, ending) => str.endsWith(ending);

solution("abcde", "cde"); // true
solution("abcde", "abc"); // false

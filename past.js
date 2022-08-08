/* 
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the 
time since midnight in milliseconds.

P: you are given hours, minutes , and secs
R: return the time since midnight in millisecs
E:

h = 0
m = 1
s = 1

result = 61000

P:
create a function that takes in all 3 ints
then create vars that multiply the ints to millisecs
then return all millisecs added up
*/

function past(h, m, s) {
  let hrs = h * 3600000;
  let min = m * 60000;
  let sec = s * 1000;
  return (time = hrs + min + sec);
}

past(0, 1, 1); //expected output: 61000
past(2, 3, 5); //expected output: 7385000

//in one line:
const past = (h, m, s) => h * 3600000 + m * 60000 + s * 1000;

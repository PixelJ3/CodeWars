/*
Complete the function which returns the weekday according to the input number:

P: you will be given a random number as a parameter
R: create a function whick returns the weekday according to the input number.
E:
1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"
P:
create a function that takes in a number
if the number is greater than 7, return "Wrong, please enter a number between 1 and 7";
create an object that contains the days and names,
if n = 
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",

return the day when given the number for it
*/
function whatday(num) {
  let days = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  };
  return days[num] || "Wrong, please enter a number between 1 and 7";
}

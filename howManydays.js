/*
switch is the keyword and n is the variable to switch. case 1 means when n===1. 
Following the ":" you can add your code for what to do in that case. The keyword
break is used as termination - if you forget break, the code will continue running 
through the other case statements and default until a break appears. 
default is always entered if you've reached it.

In some instances, the switch statement is clearer than the if..else statement.
*/
function howManydays(month) {
  var days = month;
  switch (days) {
    case 1:
      return 31;
      break;
    case 2:
      return 28;
      break;
    case 3:
      return 31;
      break;
    case 4:
      return 30;
      break;
    case 5:
      return 31;
      break;
    case 6:
      return 30;
      break;
    case 7:
      return 31;
      break;
    case 8:
      return 31;
      break;
    case 9:
      return 30;
      break;
    case 10:
      return 31;
      break;
    case 11:
      return 30;
      break;
    case 12:
      return 31;
      break;
  }
  return days;
}

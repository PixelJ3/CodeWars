/*
Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you 
are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances 
under which you need to set an alarm). It should return false otherwise. 

P: you will be given two parameters, The first parameter, employed, is true whenever you 
are employed and the second parameter, vacation is true whenever you are on vacation. 
R: return true if you are employed and not on vacation, else return false
E: 
setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true

P: 
create a function that acceptes two parameters
if employed is true and vacation is false 
return true 
else return false; 
*/

function setAlarm(employed, vacation) {
  if (employed === true && vacation === false) {
    return true;
  } else {
    return false;
  }
}

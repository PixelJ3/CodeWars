/*
Create a function called args_count that returns the number of arguments provided

P: you will be given random amounts of arguments
R: return the number of arguments given
E: 
args_count(1, 2, 3, 10, 54, 37); => 6
args_count(1, 2, 3, 10, 15, 16, 12, 36); => 8
P: 
create a function 
return the amount of arguments using arguments.length

*/
function args_count() {
  return arguments.length;
}

args_count(1, 2, 3, 10); //4
args_count(1, 2, 3); //3

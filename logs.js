/*
Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.

P: you will be given 3 seperate numbers
R: create a function that adds two logs with base X, with the value of A and B. Example log A + log B where the base is X.
E: 
logs(10, 2, 3); // 0.7781512503836435
P: 
create a function that takes in 3 seperate parameters(x,a,b)
using math.log(), multiply a,b
then divide product by math.log(x)
return output
*/
function logs(x, a, b) {
  return Math.log(a * b) / Math.log(x);
}

logs(10, 2, 3); // 0.7781512503836435
logs(5, 2, 3); // 1.1132827525593785
logs(1000, 2, 3); // 0.25938375012788123

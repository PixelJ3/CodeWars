/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

P: you will be given two values and an operator
R: return the output of (value1,Operator,value2)
E:Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
P:
create a function that takes in an operator and two seperate values
create an array from the 3 given parameters
join the arr
evalute the arr using eval()
return output
*/
// function basicOp(op, value1, value2){
//    // let arr=Array.from([value1,op,value2]).join(" ");
//    // return eval(arr);

//   return eval(Array.from([value1,op,value2]).join(" "));
//   }

const basicOp = (op, value1, value2) =>
  eval(Array.from([value1, op, value2]).join(" "));

basicOp("/", 49, 7); //7
basicOp("+", 4, 7); //11
basicOp("-", 15, 18); //-3
basicOp("*", 5, 5); //25

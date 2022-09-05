/*
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:(Input1, Input2, Input3 --> Output)


P: you will be given on of the following operators:  "add", "subtract", "divide", "multiply".
R: return the result of the two numbers having that operator used on them.
E:
    5, 2, "add"      --> 7
    5, 2, "subtract" --> 3
    5, 2, "multiply" --> 10
    5, 2, "divide"   --> 2.5
P:
create a function that takes in 2 numbers and operator type
use if case for each operator type
return results
*/

function arithmetic(a, b, operator) {
  if (operator === "add") {
    return a + b;
  } else if (operator === "subtract") {
    return a - b;
  } else if (operator === "multiply") {
    return a * b;
  } else if (operator === "divide") {
    return a / b;
  }
}

arithmetic(1, 2, "add"); //returned output: 3
arithmetic(8, 2, "subtract"); //returned output: 6
arithmetic(5, 2, "multiply"); //returned output: 10
arithmetic(8, 2, "divide"); //returned output: 4

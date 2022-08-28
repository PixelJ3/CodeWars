/* 
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

P: you will be given an array of digits 
R:return true if the given array contains requested value, if not return false
E: 
check([66, 101], 66) // true
check([101, 45, 75, 105, 99, 107], 107) // true
check(['t', 'e', 's', 't'], 'e') // true
check(['what', 'a', 'great', 'kata'], 'kat') // false
P:
create a function that takes in two parameters
if a includes b
return true 
else return false

*/

const check = (a, b) => a.includes(b);

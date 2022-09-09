/* 
There is a queue for the self-checkout tills at the supermarket. Your task is to create a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
N.B. You should assume that all the test input will be valid, as specified above.



P: you will be given an array and a integer
R: the function should return an integer, the total time required. 
E: 
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
P: 
create a function that takes in a array and a number
if there are no customers return 0
if n = 1 return the sum of customers
if n > 1 pop the first index and sum the rest of the arr
        if the index if greater than the sum then return the index
        if its less than the sum, add the highest value and index  and return total
if n is more than the customer length return the highest value in the customer arr

*/
function queueTime(customers, registers) {
  let arr = [];

  for (let i = 0; i < registers; i++) arr[i] = 0;

  for (let i = 0; i < customers.length; i++) {
    arr[0] += customers[i];
    arr.sort((a, b) => a - b);
  }

  return arr[arr.length - 1];
}

queueTime([5, 3, 4], 1);
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10, 2, 3, 3], 2);
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

queueTime([2, 3, 10], 2);
// should return 12

queueTime([], 1);
//should return 0

queueTime([2, 2, 3, 3, 4, 4], 2);
//should return 9

queueTime([1, 2, 3, 4, 5], 100);
//should return 5

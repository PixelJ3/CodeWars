/*
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is 
the number of hotdogs a customer will buy, different numbers have different prices 
(refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

number of hotdogs	price per unit (cents)
n < 5	100
n >= 5 and n < 10	95
n >= 10	90

P: you will be given a random number
R: create a function that returns the cost of the hotdogs, depending on the amount of hotdogs, prices with change.
E: 
saleHotdogs(4); //  400
saleHotdogs(9); //  855
P: 
create a function that takes in a given number 
if the number is less than 5, return n * 100
if the number is less than 10, and greater or equals to 5, return n * 95
if the number is greater than or equals to 10, return n * 90
*/
function saleHotdogs(n) {
  if (n < 5) {
    return n * 100;
  } else if (n >= 5 && n < 10) {
    return n * 95;
  } else {
    return n * 90;
  }
}

saleHotdogs(1); //  100
saleHotdogs(4); //  400
saleHotdogs(5); //  475
saleHotdogs(9); //  855
saleHotdogs(10); //  900
saleHotdogs(100); // 9000

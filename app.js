/*
I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

P: a random number as a parameter
R: given the age of the human return the respective ages of [humanYears,catYears,dogYears].
E:   
    humanYearsCatYearsDogYears(1) //[1,15,15]
    humanYearsCatYearsDogYears(2) // [2,24,24]
    humanYearsCatYearsDogYears(10) //[10,56,64]
P:
create a function that takes in a number(n)
if n is less than 2 return 1,15,15
if n is equal to 2 return 2,24,24
if n is greater than 2 return n, n*4 + 24,n*5+24
*/
humanYearsCatYearsDogYears(10);
function humanYearsCatYearsDogYears(humanYears) {
  if (humanYears < 2) {
    return [1, 15, 15];
  } else if (humanYears === 2) {
    return [2, 24, 24];
  } else {
    const humanAge = humanYears - 2;
    return [humanYears, humanAge * 4 + 24, humanAge * 5 + 24];
  }
}

humanYearsCatYearsDogYears(1); // expected output: [1,15,15]

humanYearsCatYearsDogYears(2); // expected output: [2,24,24]

humanYearsCatYearsDogYears(10); // expected output: [10,56,64]

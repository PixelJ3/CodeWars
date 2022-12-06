/* 
DESCRIPTION:
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

P: you will be given a random age
R: return what each person should drink responding to their age
E:
13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"
P:
if age < 14, return "drink tody"
else if age < 18, return "drink coke"
else if age < 21 , return "drink beer"
else if age <= 30 , return "drink whisky"
*/

function peopleWithAgeDrink(old) {
  if (old < 14) {
    return "drink toddy";
  } else if (old < 18) {
    return "drink coke";
  } else if (old < 21) {
    return "drink beer";
  } else if (old <= 30) {
    return "drink whisky";
  }
}

peopleWithAgeDrink(13); // returns "drink toddy"
peopleWithAgeDrink(17); // returns "drink coke"
peopleWithAgeDrink(18); // returns "drink beer"
peopleWithAgeDrink(20); // returns "drink beer"
peopleWithAgeDrink(30); // returns "drink whisky"

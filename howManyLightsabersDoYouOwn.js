/*
Inspired by the development team at Vooza, write the function that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your function should have a default parameter.

P: you will be given a random string(name)
R: write a function that return 18 if the name is equal to "Zach", else return 0
E: For example(Input --> Output):
"anyone else" --> 0
"Zach" --> 18
P:
create a function that takes in a string
if the name == "Zach", return 18
anything else, return 0
*/

function howManyLightsabersDoYouOwn(name) {
  if (name == "Zach") {
    return 18;
  } else {
    return 0;
  }
}

howManyLightsabersDoYouOwn(); // 0
howManyLightsabersDoYouOwn("Adam"); // 0
howManyLightsabersDoYouOwn("Zach"); // 18

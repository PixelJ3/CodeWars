/*
Oh thank goodness you're here! The last intern has completely ruined everything!
All of our customer's phone numbers have been scrambled, and we need those phone numbers to annoy them with endless sales calls!
The Format

Phone numbers are stored as strings and comprise 11 digits, eg '02078834982' and must always start with a 0.
However, something strange has happened and now all of the phone numbers contain lots of random characters,
whitespace and some are not phone numbers at all!

The Task
Given a string, you must decide whether or not it contains a valid phone number. If it does, return the corrected 
phone number as a string ie. '02078834982' with no whitespace or special characters, else return "Not a phone number".

P: you will be given a string of numbers and letters
R: write a function that decides whether or not it contains a valid phone number. If it does, return the corrected 
phone number as a string ie. '02078834982' with no whitespace or special characters, else return "Not a phone number".
E: For example, '02078834982' has somehow become 'efRFS:)0207ERGQREG88349F82!' and there are lots more lines that we need to check.
*/
function isItANum(str) {
  return (str.replace(/\D/g, "").match(/^0\d{10}$/) || [
    "Not a phone number",
  ])[0];
}
//one liner:
const isItANum = (str) =>
  (str.replace(/\D/g, "").match(/^0\d{10}$/) || ["Not a phone number"])[0];

isItANum("S:)0207ERGQREG88349F82!efRF)"); //, "02078834982");
isItANum("sjfniebienvr12312312312ehfWh"); //, "Not a phone number");
isItANum("0192387415456"); //, "Not a phone number");
isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165"); //, "02084564165");
isItANum("stop calling me no I have never been in an accident"); //, "Not a phone number");

/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"


P: you will be given two numbers
R:
if num is 18.5 or less return 'underweight'
if num is 25 or less return 'normal'
if num is 30 or less return 'overweight'
if num is more than 30 return 'obese'
E: 
P:
create a function that takes in two parameter (height and weight)
let total bmi = weight/ height * height
if total is 18.5 or less return 'underweight'
if total is 25 or less return 'normal'
if total is 30 or less return 'overweight'
if total is more than 30 return 'obese'

*/
function bmi(weight, height) {
  let bmiadded = weight / (height * height);
  if (bmiadded <= 18.5) {
    return "Underweight";
  } else if (bmiadded <= 25) {
    return "Normal";
  } else if (bmiadded <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

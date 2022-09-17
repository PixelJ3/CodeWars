/*
Bug Fix: 

The function is not returning the correct values. Can you figure out why?

Example (Input --> Output ):

3 --> "Earth"

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
    case 2:
      name = 'Venus'
    case 3:
      name = 'Earth'
    case 4:
      name = 'Mars'
    case 5:
      name = 'Jupiter'
    case 6:
      name = 'Saturn'
    case 7:
      name = 'Uranus'
    case 8:
      name = 'Neptune'
  }
  
  return name;
}

getPlanetName(2) // expected output: 'Venus',    output recieved: 'Neptune';
getPlanetName(5) // expected output: 'Jupiter',  output recieved: 'Neptune';
getPlanetName(3) // expected output: 'Earth',    output recieved: 'Neptune';


ERROR: expected 'Neptune' to equal 'Venus'

fix the given function to return the correct answer.
*/

function getPlanetName(id) {
  var name = id;
  switch (id) {
    case 1:
      return "Mercury";
      break;
    case 2:
      return "Venus";
      break;
    case 3:
      return "Earth";
      break;
    case 4:
      return "Mars";
      break;
    case 5:
      return "Jupiter";
      break;
    case 6:
      return "Saturn";
      break;
    case 7:
      return "Uranus";
      break;
    case 8:
      return "Neptune";
      break;
  }
}

getPlanetName(2); // expected output:'Venus'    output recieved:'Venus'
getPlanetName(5); // expected output:'Jupiter'  output recieved:'Jupiter'
getPlanetName(3); // expected output:'Earth'    output recieved:'Earth'

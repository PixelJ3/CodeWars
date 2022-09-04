/* 
Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres 
of water per hour of cycling.

You get given the time in hours and you need to return the number of 
litres Nathan will drink, rounded to the smallest value.

P: you will be given a random number
R: return the number of litres of Nathan will drink, rounded to the smallest value.
E:

    time(3)        //return output: 1
    time(6.7)      //return output: 3
    time(11.8)     //return output: 5
    litres(1787)   //return output: 893
    litres(1.4)    //return output: 0

P:
create a function that takes in the number given
while using Math.floor multiply time and 0.5
return output
*/

function litres(time) {
  return Math.floor(time * 0.5);
}

const litres = (time) => Math.floor(time * 0.5);

litres(3); //expected output: 1
litres(6.7); //expected output: 3
litres(11.8); //expected output: 5
litres(1787); //expected output: 893
litres(1.4); //expected output: 0

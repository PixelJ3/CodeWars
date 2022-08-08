/* There are pillars near the road. The distance between the pillars is the 
same and the width of the pillars is the same.
 Your function accepts three arguments:

    1) number of pillars (≥ 1);
    2) distance between pillars (10 - 30 meters);
    3)width of the pillar (10 - 50 centimeters).

Calculate the distance between the first and the last pillar 
in centimeters (without the width of the first and last pillar).



P: What if there's only one pillar or none? How do we find the distance?
R: we need to return the distance from the first pillar to the last
E:


(pillars(1, 10, 10) , 0);
(pillars(2, 20, 25) , 2000);
(pillars(11, 15, 30) , 15270);


P: create a function that takes in the number of pillars 
         if pillars if less than or equal to 1 then return 0
if(num_pill <= 1) {
    return 0
}

// if pillars is 2 then just multiply distance * 100 
else if ( num_pill === 2) {
    return dist * 100 
}


// else : 
else {
    let widthTotal = ((num_pill - 2) * width) 
    let lengthTotal = ((num_pill - 1) * (dist * 100))
    return widthTotal + lengthTotal
}



function pillars(num_pill, dist, width) {
    let widthTotal = ((num_pill - 2) * width) 
    let lengthTotal = ((num_pill - 1) * (dist * 100))
    return widthTotal + lengthTotal
} */

//putting everything together
function pillars(num_pill, dist, width) {
  if (num_pill <= 1) {
    return 0;
  } else if (num_pill === 2) {
    return dist * 100;
  } else {
    let widthTotal = (num_pill - 2) * width;
    let lengthTotal = (num_pill - 1) * (dist * 100);
    return widthTotal + lengthTotal;
  }
}

console.log(pillars(11, 15, 30)); //15270
console.log(pillars(2, 20, 25)); //2000
console.log(pillars(1, 10, 10)); //0

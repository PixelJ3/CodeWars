/*
Bob needs a fast way to calculate the volume of a cuboid with three values: the length, 
width and height of the cuboid. Write a function to help Bob with this calculation.

P: you will be given a set of three numbers
R: return the volume of the given parameters
E:  
    getVolumeOfCuboid(3,3,3) //27
    getVolumeOfCuboid(6,3,5) //90
    getVolumeOfCuboid(4,6,2) //48
P:

*/

function getVolumeOfCuboid(length, width, height) {
  return length * width * height;
}

// in one line:
const getVolumeOfCuboid = (length, width, height) => length * width * height;

getVolumeOfCuboid(3, 3, 3); //27
getVolumeOfCuboid(6, 3, 5); //90
getVolumeOfCuboid(4, 6, 2); //48

/*---________________________________________________________________________________________________________________________
Complete the function which converts hex number (given as a string) to a decimal number.

P: you will be given a string of numbers or letters
R: create a function that converts hex number (given as a string) to a decimal number.
E: hexToDec("-C"); => -12
P:
create a function that takes in a string;
using parseInt(hex,16), convert hex to dec
return the decimal number
*/

/*
function hexToDec(hexString){
  return parseInt(hexString,16)
}
*/
const hexToDec = (hexString) => parseInt(hexString, 16);

hexToDec("1"); // 1
hexToDec("a"); // 10
hexToDec("10"); // 16
hexToDec("FF"); // 255

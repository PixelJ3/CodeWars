/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

P: you will be given a string 
R: create a function that allows 4 or 6 digit PIN codes, PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.
E: 
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
P: 
create a function that takes in a string 
using .test(), test the pin if the string is all digits
compare digits to pin.length() == 4 || pin.length() == 6
return output
*/
function validatePIN(pin) {
  return /^\d+$/.test(pin) && (pin.length === 4 || pin.length === 6);
}

validatePIN("123456"); // true, "Wrong output for '123456'"
validatePIN("098765"); // true, "Wrong output for '098765'"
validatePIN("000000"); // true, "Wrong output for '000000'"
validatePIN("123456"); // true, "Wrong output for '123456'"
validatePIN("090909"); // true, "Wrong output for '090909'"
validatePIN("a234"); // false, "Wrong output for 'a234'"
validatePIN(".234"); // false, "Wrong output for '.234'"
validatePIN("1234567"); // false, "Wrong output for '1234567'"
validatePIN("-1234"); // false, "Wrong output for '-1234'"
validatePIN("1.234"); // false, "Wrong output for '1.234'"
validatePIN("-1.234"); // false, "Wrong output for '-1.234'"
validatePIN("00000000"); // false, "Wrong output for '00000000'"

/*
Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.

P: you will be given an array
R: create a function that returns the element of the input-array / list sorted in lexicographical order.
E:
sortme(["one", "two", "three"]); //[ 'one', 'three', 'two' ]
P:
create a function that takes in an array
sort array
return output
*/
sortme = function (names) {
  return names.sort();
};

sortme(["one", "two", "three"]); //[ 'one', 'three', 'two' ]
sortme(["CFWbj", "mvSYZ", "netsvRu"]); // ["CFWbj","mvSYZ","netsvRu"]
sortme(["BMBhTAU", "Qfxra", "dNrEB", "lpZj", "uFlutpVR", "vYkQRoFM"]); //["BMBhTAU","Qfxra","dNrEB","lpZj","uFlutpVR","vYkQRoFM"]
sortme(["BvROYl", "CLdbX", "EKAh", "HnZMBlV", "KDYOFcT", "dPNykswPm"]); //["BvROYl","CLdbX","EKAh","HnZMBlV","KDYOFcT","dPNykswPm"]

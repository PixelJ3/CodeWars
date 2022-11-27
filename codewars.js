/*
This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

var a == "code";
var b == "wa.rs";
var name == a + b;

P: you will be given two strings (a,b)
R: debug the given code to return a concated string
E: 
a = "code"
b = "wa.rs"
a + b = "codewa.rs"
P:
let a = "code"
let b = "wa.rs"
concat a + b
return output
*/

//debugged code:
var a = "code";
var b = "wa.rs";
var name = a + b;

console.log(name); // expected output: "codewa.rs"

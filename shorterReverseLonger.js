/*
Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b

P: you will be given two seperate strings
R: Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.
E: 
shorter_reverse_longer("first", "abcde"); // "abcdetsrifabcde"
shorter_reverse_longer("hello", "bau"); // "bauollehbau"
shorter_reverse_longer("fghi", "abcde"); // "fghiedcbafghi"
P:
create a function that takes in two seperate strings (2 parameters)
if a == b
return b+reverse(a)+b
else 
sort shortest to longest length
return shorter+reverse(longer)+shorter.
*/

function shorter_reverse_longer(c, d) {
  if (c.length == d.length) {
    return `${d}${c.split("").reverse().join("")}${d}`;
  } else {
    let longer = [c, d].sort((a, b) => a.length - b.length);
    return `${longer[0]}${longer[1].split("").reverse().join("")}${longer[0]}`;
  }
}

shorter_reverse_longer("first", "abcde"); // "abcdetsrifabcde"
shorter_reverse_longer("hello", "bau"); // "bauollehbau"
shorter_reverse_longer("fghi", "abcde"); // "fghiedcbafghi"

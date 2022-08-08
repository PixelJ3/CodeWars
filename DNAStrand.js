/* 
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of 
cells and carries the "instructions" for the development and 
functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as 
"C" and "G". You function receives one side of the DNA (string, except for Haskell); 
you need to return the other complementary side. DNA strand is never 
empty or there is no DNA at all (again, except for Haskell).


P: you will be give a dna string containing letters
R: return with 'A' and 'T', 'C' and 'G' swapped (replaced)
E: 
DNAStrand("AAAA"),"TTTT","String AAAA is"
DNAStrand("ATTGC"),"TAACG","String ATTGC is"
DNAStrand("GTAT"),"CATA","String GTAT is"
P: 
create a function that takes in a string
then replace 'A' with 'T' and 'C' with 'G' and visevera
then return the string

*/

function DNAStrand(dna) {
  var complements = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  return dna
    .split("")
    .map(function (char) {
      return complements[char];
    })
    .join("");
}

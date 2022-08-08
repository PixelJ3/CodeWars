/*
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed 
of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical 
structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"

The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be
valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'. 



P: are we converting multiple letters at once? all Uppercase ?
R: return RNA 
E:

    "GCAT"  =>  "GCAU"
    "GCAT"  =>  "GCAU"
    "GACCTTTA"  => "GACCUUUA"

P: create a function that takes in the dna 
splits the dna 
replaces all the 'T' with 'U' 
then joins it
return the result.

*/

function DNAtoRNA(dna) {
  const search = "T"; // searching for all 'T'
  const replaceWith = "U"; // replacing 'T' with 'U'
  let result = dna.split(search).join(replaceWith); // spliting it while searching for 'T' then joining it while replacting every "T" with "U"
  return result;
}

const DNAtoRNA = (dna) => dna.replaceAll("T", "U");

DNAtoRNA("GCAT"); //  "GCAU"
DNAtoRNA("GCAT"); //  "GCAU"
DNAtoRNA("GACCTTTA"); // "GACCUUUA"

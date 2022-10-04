/* 
You can print your name on a billboard ad. Find out how much it will cost you. 
Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).

P: you will be given a two inputs, a name with random length, and/or a random int
R: return the cost of the ad by multiplying each name length by 30, without using the * operator.
E:
    billboard("Jeong-Ho Aristotelis"); //600
    billboard("Abishai Charalampos"); //570
    billboard("Hadufuns John", 20); //260
    billboard("Paolo Oli"); //270
    billboard("Werner Vígi", 15); //165
    billboard("Zoroaster Donnchadh"); //570
P:
create a function that takes in two inputs
get the length of string(name)
multiply it, reverse multiply: (a/(1/b))
return product
*/

const billboard = (name, price = 30) => name.length / (1 / price);

billboard("Jeong-Ho Aristotelis"); //600
billboard("Abishai Charalampos"); //570
billboard("Hadufuns John", 20); //260
billboard("Paolo Oli"); //270
billboard("Werner Vígi", 15); //165
billboard("Zoroaster Donnchadh"); //570

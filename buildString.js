/*
Oh no! Timmy hasn't followed instructions very carefully and forgot how
to use the new String Template feature, Help Timmy with his string
template so it works as he expects!

P: you will be given a parameter with multiple values 
R: fix the string template so it works as expected
E: 
    buildString('Cheese','Milk','Chocolate'),    //return output: 'I like Cheese, Milk, Chocolate!'
    buildString('Cheese','Milk'),                //return output: 'I like Cheese, Milk!' 
    buildString('Chocolate'),                    //return output: 'I like Chocolate!'
P: 
    create a function that takes in a list of items
    return the list in a string using a string template
*/

function buildString(...template) {
  return `I like ${template.join(", ")}!`;
}

buildString("Cheese", "Milk", "Chocolate"); //return output: 'I like Cheese, Milk, Chocolate!'
buildString("Cheese", "Milk"); //return output: 'I like Cheese, Milk!'
buildString("Chocolate"); //return output: 'I like Chocolate!'

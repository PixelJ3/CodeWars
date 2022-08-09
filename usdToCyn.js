/* 
Create a function that converts US dollars (USD) to Chinese Yuan (CNY) .
The input is the amount of USD as an integer, and the output should be a string that 
states the amount of Yuan followed by 'Chinese Yuan'
Examples (Input -> Output)
* 15  -> '101.25 Chinese Yuan'
* 465 -> '3138.75 Chinese Yuan'

The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be 
represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")

P: is there any floats given? what is the conversion value? does it need exact decimal or to the nearst tenth decimal? 
R: return the converted value of USD to Chinese Yuan
E:
     15  -> '101.25 Chinese Yuan'
     465 -> '3138.75 Chinese Yuan'

P: create function that takes in usd
    create a var for chinese Yuan 
    convert Yuan by multiplying 6.72 per 1 usd
    use .toFixed(2) to get the tenth decimal 
    then return the converted value
*/

function usdToCyn(usd) {
  //create function that takes in usd
  let CYN = usd * 6.75; //create a var for chinese Yuan, convert Yuan by multiplying 6.72 per 1 usd
  return CYN.toFixed(2) + " Chinese Yuan"; //then return the converted value, use .toFixed(2) to get the tenth decimal
}

// in one line:
const usdToCyn = (usd) => `${usd * 6.75} Chinese Yuan`;

usdToCyn(15); //returns: '101.25 Chinese Yuan'
usdToCyn(465); //returns: '3138.75 Chinese Yuan'

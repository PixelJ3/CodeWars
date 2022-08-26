/* 
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

P: you will be given 3 random nums 
R:return total of all 3 added
E:
  5, 10, 2  -->  17
  43, 10, 5 -->  58
P:
create a function that takes in 3 numbers
add all 3
return total
*/

const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) =>
  laLigaGoals + copaDelReyGoals + championsLeagueGoals;

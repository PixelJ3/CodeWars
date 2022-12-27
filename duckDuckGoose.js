/*
Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the 
name of the chosen Player(name is a property of Player objects, e.g Player.name)

duck_duck_goose([a, b, c, d], 4) should return d.name
// PHP only
duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"]

P: you will be given 2 parameters (players, goose)
R: create a function that returns the name of the chosen player
E:
duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
*/
function duckDuckGoose(players, goose) {
  return players[(goose - 1) % players.length].name;
}

duckDuckGoose(players, 1); // "a"
duckDuckGoose(players, 3); // "c"
duckDuckGoose(players, 10); // "z"
duckDuckGoose(players, 20); // "z"
duckDuckGoose(players, 30); // "z"
duckDuckGoose(players, 18); // "g"
duckDuckGoose(players, 28); // "g"
duckDuckGoose(players, 12); // "b"
duckDuckGoose(players, 2); // "b"
duckDuckGoose(players, 7); // "f"

/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
*/

function noBoringZeros(n) {
  return +`${n}`.replace(/0*$/, "");
}

noBoringZeros(1450); // 145
noBoringZeros(960000); // 96
noBoringZeros(1050); // 105
noBoringZeros(-1050); // -105
noBoringZeros(-105); // -105
noBoringZeros(0); // 0

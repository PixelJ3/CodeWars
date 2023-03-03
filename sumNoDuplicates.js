/* Please write a function that sums a list, but ignores any duplicate items in the list.
For instance, for the list [3, 4, 3, 6] , the function should return 10. 

*/
function sumNoDuplicates(arr) {
  let uniArr = [];
  let sum = 0;
  arr.forEach((num) => {
    if (arr.indexOf(num) === arr.lastIndexOf(num)) {
      uniArr.push(num);
      sum += num;
    }
  });
  return sum;
}

sumNoDuplicates([7, 1, 8, 8, 5, 5, 1, 4, 0, 1, 10, 1]); // 21
sumNoDuplicates([3, 4, 6, 3, 3]); // 10

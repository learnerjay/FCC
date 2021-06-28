/*
Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/
Solution
function diffArray(arr1, arr2) {
  var newArr = [];
  newArr = arr1.filter(x => !arr2.includes(x))
  .concat(arr2.filter(x => !arr1.includes(x))); 
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
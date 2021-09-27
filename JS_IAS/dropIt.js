/*
Drop it

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/
Solution
function dropElements(arr, func) {
  while(!func(arr[0])){
    arr.shift()
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
/*
Alternate Solution through js native function
 >> findIndex help the index position of function 
 >> & than slice helps us eliminating the rest function
let sliceIndex = arr.findIndex(func)
  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
*/

/*
Falsy Bouncer

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/
Solution
function bouncer(arr) {
  return arr.filter(Boolean);
}
/*Alternate solution - flasy way
let newArray = [];
  for (let i = 0; i < arr.length; i++) {
  //Before pushing the array to the new array - we're checking, if data is valid or not- if valid that pushing it 
    if (arr[i]) {
      newArray.push(arr[i]);
      }
  }
  return newArray;
*/

bouncer([7, "ate", "", false, 9]);

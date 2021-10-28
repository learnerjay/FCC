/*
Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/
Solution
function mutation(arr) {
  let array2 = arr[1].toLowerCase();
  let array1 = arr[0].toLowerCase();
  for(let i=0;i<array2.length;i++){
    if(array1.indexOf(array2[i]) < 0)return false
  }
 return true;
}

mutation(["hello", "hey"]);
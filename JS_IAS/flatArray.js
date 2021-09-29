/*
Steamroller

Flatten a nested array. You must account for varying levels of nesting.
*/
Solution
function steamrollArray(arr) {
  const flatArr = [];
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
        flatArr.push(...steamrollArray(arr[i]))
    }else{
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
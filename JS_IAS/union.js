/*
Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/
Solution
function uniteUnique(arr) {
 var arr1 =[...arguments];
  var result = [];
  for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr1[i].length;j++){
      if(!result.includes(arr1[i][j])){
        result.push(arr1[i][j])
      }
    }
  }
 return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/** Es 6
function uniteUnique(...arrays) {
  //using the spread operator to flat the array
  const flatArray = [].concat(...arrays);

  // create a Set allows to remove duplicates 
  return [...new Set(flatArray)];
}

Solved it using passsing 3 diff arrays & checking if not pushed than add
function uniteUnique(arr1,arr2,arr3) {
  let finalArr = [];
  for(var i=0;i<arguments.length;i++){
    var arrArguments = arguments[i];
    
    for(var j=0;j<arrArguments.length;j++){
      var indexValue = arrArguments[j];

      if(finalArr.indexOf(indexValue) < 0){
        finalArr.push(indexValue); 
      }
    } 
  }
  return finalArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1],[6,7,8]);
**/

/*
Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/
Solution
  function largestOfFour(arr) {
    let results=[];
    for(let i=0;i<arr.length;i++){
    let largestNum = arr[i][0];
    
    for(let j=0;j<arr[i].length;j++){
      if(arr[i][j]> largestNum){
        largestNum =arr[i][j];
      }
    }
    results[i] = largestNum;
    }
  return results;
  }

  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
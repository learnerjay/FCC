/*
Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/
Solution
function smallestCommons(arr) {
 var max = Math.max(arr[0],arr[1]);
 var min = Math.min(arr[0],arr[1]);
 var multiple = max;
 for(var i=max;i>=min;i--){
   if(multiple %i !== 0){
     multiple += max;
     i = max;
   }
 }
 return multiple;
}
smallestCommons([2,10]);
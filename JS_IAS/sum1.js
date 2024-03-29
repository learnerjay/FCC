/*
Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/
Solution
function sumAll(arr) {
  let smallest = Math.min(arr[0],arr[1]);
  let largest = Math.max(arr[0],arr[1]);
  let sum = 0;
  for(let i=smallest;i<=largest;i++){
    sum +=i;
  }
  return sum;
}

sumAll([1, 4]);

<!--Different way of accessing array on elements with spread opertaror --!>
/**
let smallest = Math.min(..arr);
let largest = Math.max(..arr);
**/

/*Another short hand way
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
*/
/*
const [first, last] = [...arr].sort((a, b) => a - b);
  return first !== last
    ? first + sumAll([first + 1, last])
    : first;
*/
/*Solving through math function
 const start= arr[0];
  const end = arr[1];
  
  const count = Math.abs(startNum - endNum) + 1;
  const sum = ((start + end) * count) / 2;
  return sum;*/


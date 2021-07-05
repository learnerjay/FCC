/*
Implement the filter Method on a Prototype

You might learn a lot about the filter method if you implement your own version of it. It is recommended you use a for loop or Array.prototype.forEach().

Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.
*/
Solution
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];
  for(let i=0;i<this.length;i++){
    if(callback(this[i])== true){
      newArray.push(this[i]);
    }
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
/*
Another solution :
 this.forEach(a => newArray.push(callback(a)));
 
 3rd solution
 Array.prototype.myMap = function(callback, arr= [], i=0) {
  // Only change code below this line
  return i < this.length ? this.myMap(callback, arr.concat(callback(this[i])), i + 1)
  : arr;
  // Only change code above this line
  return newArray;
};
 */

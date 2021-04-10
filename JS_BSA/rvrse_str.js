Reverse a String

Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.

Solution
function reverseString(str) {
  var newString = [];
  for(var i=str.length-1;i>=0;i--){
    newString += str[i];
  }
  return newString;
}

reverseString("hello");

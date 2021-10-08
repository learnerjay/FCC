/*
Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/
Solution
function spinalCase(str) {
  // regex to elemenated the space and underscored
  var regEx = /\s+|_+/g;
  // replace the space and underscored
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str.replace(regEx, "-").toLowerCase();
}

spinalCase('This Is Spinal Tap');

/*
Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/
Solution
function fearNotLetter(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var length = str.length;
   var start = alphabet.indexOf(str[0]);
  for(let i=start;i<start + length;i++){
    if(!str.includes(alphabet[i])){
     return alphabet[i];
    }
  }
  return undefined;
}

fearNotLetter("abce");
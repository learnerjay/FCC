/*
Repeat a String Repeat a String

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
*/
Solution
function repeatStringNumTimes(str, num) {
  let accum = "";
  while(num>0){
    accum+=str;
    num--;

  }
  return accum;
}

repeatStringNumTimes("abc", 3);

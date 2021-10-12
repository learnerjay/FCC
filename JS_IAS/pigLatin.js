/*
Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/
Solution
function translatePigLatin(str) {
   var pigLatin = "";
  var regEx = /[aeiou]/gi;
  if(str[0].match(regEx)){
    pigLatin = str + "way";
  }else if(str.match(regEx) === null){
    pigLatin = str + "ay";
  }else{
    var vowelIndex = str.indexOf(str.match(regEx)[0]) 
      pigLatin = str.substr(vowelIndex) + str.substr(0,vowelIndex) + "ay"; 
    }
  return pigLatin;
}

translatePigLatin("california");

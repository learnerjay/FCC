/*
Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/
Solution
function translatePigLatin(str) {
   if(str.charAt(0) == 'a'|'e'|'i'|'o'|'u'){
     return str+'way';
   }else{
     return str.substr(1)+str[0]+'ay';
   }
}

translatePigLatin("california");
//Solved 3 cases , only simple one 
// running tests
translatePigLatin("glove") should return the string oveglay.
translatePigLatin("eight") should return the string eightway.
Should handle words where the first vowel comes in the middle of the word.  translatePigLatin("schwartz") should return the string artzschway.
Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.
// tests completed
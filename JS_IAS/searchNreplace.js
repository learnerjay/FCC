/*
Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
*/
Solution
function myReplace(str, before, after) {
  let firstCharLength = before.length;
  var strIndex = str.indexOf(before);
  
  if(str[strIndex] === str[strIndex].toUpperCase()){
      after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  
  return str.substr(0,strIndex) + after + str.substr(strIndex+firstCharLength);
}

myReplace("I think we should look up there", "up", "Down");
/*Alternate soltn with regex - Mid Level same logic
function applyCasing(source, target) {
  var targetArr = target.split("");
    var sourceArr = source.split("");
    for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++) {
      if (/[A-Z]/.test(sourceArr[i])) {
        targetArr[i] = targetArr[i].toUpperCase();
      }
      else targetArr[i] = targetArr[i].toLowerCase();
    }
    return targetArr.join("");
  }
  return str.replace(before, applyCasing(before, after));
}
*/

/*
Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities
*/
Solution
function convertHTML(str) {
  var temp = str.split("");
  for(let i=0;i<str.length;i++){
    switch (temp[i]){
      case "&" :
      temp[i] = "&amp;";
      break;
      case "<" :
      temp[i] = "&lt;";
      break;
      case ">" :
      temp[i] = "&gt;";
      break;
      case '"' :
      temp[i] = "&quot;";
      break;
      case "'" :
      temp[i] = "&apos;";
      break;
    }
   
  }
   temp = temp.join("");
  return temp;
}

convertHTML("Dolce & Gabbana");
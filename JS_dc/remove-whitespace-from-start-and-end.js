\*
Remove Whitespace from Start and EndPassed

Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.

Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.
*/
Solution
let hello = "   Hello, World!  ";

let wsRegex = /^\s*\w+,\s\w+!\s*/; 
// Change this line
let result = hello.replace(wsRegex,'Hello, World!' ); // Change this line
/* reverse string recursive
Write a function, reverseString, that takes in a string as an argument.
 The function should return the string with its characters in reverse order. 
You must do this recursively. */

const reverseString = (s) => {
    if(s.length == 0 ) return "";
   
   return s.slice(s.length-1,(s.length)) + reverseString(s.slice(0,(s.length-1)));
   
 };
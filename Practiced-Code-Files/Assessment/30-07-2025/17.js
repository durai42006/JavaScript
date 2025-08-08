/* 17. Code: Debugging Task: Find the error in this code and fix it:
   let userName
   console.log("User: " + userName.toUpperCase());
 */


/* Error : TypeError: Cannot read properties of undefined (reading 'toUpperCase')
   Reason : value for variable is missing. 
   Fix : Set value for variable 'userName'*/

let userName="Durai";
console.log("User: " + userName.toUpperCase());
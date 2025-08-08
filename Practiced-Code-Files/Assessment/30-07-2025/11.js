/* 11 Code: Convert the following object to JSON and then parse it back to an object.
   const student = { name: "Tom", age: 21 };
*/


/* Answer */

const student = { name: "Tom", age: 21 };

console.log("-----------------JS object to JSON--------------------")

const studentJson = JSON.stringify(student);
console.log(studentJson); // Json formatted output

console.log("-----------------JSON to JS object--------------------")

const studentJsObj = JSON.parse(studentJson);
console.log(studentJsObj); // JS object formatted output
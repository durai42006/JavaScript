/* 13. Code: Format today’s date to "DD-MM-YYYY" using JavaScript's Date object. */

let today = new Date();

let year=today.getFullYear();
let month=today.getMonth();
let day=today.getDate();

console.log(`Today date is : '${day}-${(month+1).toString().padStart(2,0)}-${year}'`);
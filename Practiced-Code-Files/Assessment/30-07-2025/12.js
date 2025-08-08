/* 12. Code: Use toFixed() to format the number 3.14159 to two decimal places. */

// without toFixed()
console.log("-------------------------------");
let number = 3.14159;
console.log("Without toFixed() : ",number);

// with toFixed()
console.log("-------------------------------");
let  output =  number.toFixed(2);
console.log("With toFixed() as string : ",output);  // output as string by default
console.log("With toFixed() as number : ",Number(output)); // output as number

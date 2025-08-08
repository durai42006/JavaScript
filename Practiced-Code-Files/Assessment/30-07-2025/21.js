/* 21. Code: Ask the user to input a number and display whether it's even or odd. */

import createPrompt from 'prompt-sync';
const prompt = createPrompt();

console.log("--------------------------");
//Get input from user
let input = prompt("Enter any number > ");
let number = Number(input);

//Input validation :
while (input.trim() == "" || isNaN(number) || !Number.isInteger(number)) {
    console.log("Point values not allowed !")
    input = prompt("Error : Enter valid number > ");
    number = Number(input);
}

if (number % 2 == 0) {
    console.log("It is Even number");
}
else {
    console.log("It is Odd number");
}
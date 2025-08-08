/* 14. Code: Write a simple if-else statement that checks if a number is positive, negative, or zero. */

import createPrompt from 'prompt-sync';
const prompt = createPrompt();

console.log("------------------------------");


//Get input from user
let input = prompt("Enter any number > ");
let number = Number(input);

//Input validation
while (input.trim() == "" || isNaN(number))
{
    input=prompt("Error : Enter valid number > ");
    number=input;
}

console.log("------------------------------");

if(number>0)  // check positive number
{
    console.log(`Positive number is entered. Number => [${number}]:)`);
}
else if(number===0) // check zero
{
    console.log(`Entered number is Zero. Number => [${number}]:(`);
}
else               // otherwise Negative number
{
    console.log(`Negative number is entered. Number => [${number}] :)`);
}

console.log("------------------------------");
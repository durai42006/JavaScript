/* 20. Code: Ask the user for their name and greet them with 'Hello, [Name]!' */

import createPrompt from 'prompt-sync';
const prompt = createPrompt();

let input = prompt("Enter name : ");

console.log(`Hello, ${input}!`);
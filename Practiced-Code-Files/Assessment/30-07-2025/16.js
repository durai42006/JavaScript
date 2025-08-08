/* 16. Code: Write a simple form input validation snippet that ensures a username is at least 4 characters long. */

import createPrompt from 'prompt-sync';
const prompt = createPrompt();

console.log("--------------------------");
//Get input from user
let input = prompt("Enter your name : ");

//Input validation :
console.log("--------------------------");
while (!validateName(input)) {
    console.log("Minimum 4 character is required and Numbers not allowed !")
    input = prompt("Error : Enter valid name > ");
}


//valid name will be print
console.log("--------------------------");
console.log(`Name is ${input}`)
console.log("--------------------------");



//function for validation
function validateName(input) {
    let name = input;
    const pattern = /^[a-zA-Z-']{4,}$/  //Regex pattern for name

    if (name.trim() == "" || !(pattern.test(name)))
    {
        return false;
    }
    return true;
}
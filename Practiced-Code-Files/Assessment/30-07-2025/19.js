/* 19. Code: Enhance the above program to display whether the user is eligible to vote (18+). */


import createPrompt from 'prompt-sync';
const prompt = createPrompt();

let dob = prompt("Enter your DOB {yyyy-mm-dd} : ");



while (!isValidInput(dob)) {
    dob = prompt("Error : Enter correct format {yyyy-mm-dd} :");
}

let age = findAge(dob);
console.log(`Your age is ${age}`);


// Vote eligible
if (age >= 18) {
    console.log("Eligible for vote");
}
else {
    console.log("Not eligible");
}


//Functions for validation
function findAge(dob) {
    let today = new Date();
    let birthDay = new Date(dob);

    let age = today.getFullYear() - birthDay.getFullYear();
    let month = today.getMonth() - birthDay.getMonth();
    if (month < 0 || (month == 0 && today.getDate() < birthDay.getDate())) {
        age--;
    }
    return age;
}
function isValidInput(dob) {
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!dobRegex.test(dob)) {
        return false;
    }

    const [year, month, day] = dob.split("-").map(Number);

    const validDate = new Date(year, month - 1, day);

    return validDate.getFullYear() === year &&
        validDate.getMonth() === month - 1 &&
        validDate.getDate() === day;
}





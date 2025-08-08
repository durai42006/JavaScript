/* 15. Code: Create a switch statement that prints the day of the week based on a variable dayNumber (1–7). */


import createPrompt from 'prompt-sync';
const prompt = createPrompt();

console.log("--------------------------");
//Get input from user
let input = prompt("Enter any number between 1 to 7 > ");
let number = Number(input);

//Input validation :
while (input.trim() == "" || isNaN(number) || !(number>0) || !(number<8) || !Number.isInteger(number))
{
    console.log("Input only between the 1 to 7, point values not allowed !")
    input=prompt("Error : Enter valid number > ");
    number = Number(input);
}


console.log("--------------------------");
switch(number)
{
    case 1:
        {
            console.log("1 is Sunday");
            break;
        }
    case 2:
        {
            console.log("2 isMonday");
            break;
        }
    case 3:
        {
            console.log("3 is Tuesday");
            break;
        }
    case 4:
        {
            console.log("4 is Wednesday");
            break;
        }
    case 5:
        {
            console.log("5 is Thursday");
            break;
        }
    case 6:
        {
            console.log("6 is Friday");
            break;
        }
    case 7:
        {
            console.log("7 is Saturday");
            break;
        }
    default:
        {
            console.log("Something went wrong :(");
            break;
        }
}
console.log("--------------------------");
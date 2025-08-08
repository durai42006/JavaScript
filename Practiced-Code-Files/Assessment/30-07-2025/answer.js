/* MCQ and Short answers */

// 1. c) let name = "John";

// 2. True

// 3. let vs var vs const
    /*  var - function scoped, can be redeclare and reinitialize
        let - block scoped, can't be redeclared but can be reinitialized
        const - block scoped, can't be redeclared and can't be reinitialized.
    */

// 4. undefined vs null
    /*  undefined - primitive datatype, when variable has no value then that variable value is undefined when we access that variable.
        null - primitive datatype, value set for variables by explicitly.
    */

// 5. JavaScript object to Json
    /*  JSON.stringify(object) - By using this stringify() method we can convert the javascript object into json
        const obj = {name : "Durai" age:30};
        const jsonObj = JSON.stringify(obj);
        console.log(jsonObj); 
    */

// 6. d) all of the above

// 7. False - "reason - '==' check the value with coercion without the type consideration."

// 8. Check user input empty or not 
    /*  Step 1 : Get the input from user as string.
        Step 2 : Trim the input using Trim() to remove the unwanted spaces.
        Step 3 : Then compare the input with ""(empty string) to check input is empty or not.
        
        [ex] : 
                import createPrompt from 'prompt-sync';
                let prompt = createPrompt();
                let name = prompt("Enter your name : ");
                let check = name.trim();
                if(check === "")
                {
                    console.log("Input is empty")
                }
                else
                {
                    console.log("Input is valid")
                }
    */





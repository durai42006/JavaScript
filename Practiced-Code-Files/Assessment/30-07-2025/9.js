// 9. Output : "53" (string).
/*Reason : Because here + act as a concatenation operator.
           If we want to add the number in string format with actual number 
           then we convert the string into number by putting '+' infront of string.

           [ex] : 
                    var x = "5";
                    var y = 3;
                    console.log(+x + y);  
                    
                    OUTPUT : 8
*/


var x = "5";
var y = 3;
console.log(x + y);  // OUTPUT : 53

var x = "5";
var y = 3;
console.log(+x + y); // OUTPUT : 8

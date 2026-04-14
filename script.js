/********************** 
 * Cupcake ordering App
**********************/

console.log("Running Script.js");
console.log("We are learning JS");

/*****Variables*******/

let userName = "Katie";
let cakeArray = ["Chocolate - $5", "Orange - $4", "Lemon - $3.40"];

/********Main Code*******/


const OUTPUT = document.getElementById("JavaScriptOutput");
OUTPUT.innerHTML = "<h2> Hi "  + userName +", " + " what would you like to order today? </h2>";
OUTPUT.innerHTML += "<p> Our specials of the day are: " + cakeArray + "</p>"; 

function getUserName(){
    const NAME_FIELD = document.getElementById("nameField");
    let userName= NAME_FIELD.value;
    OUTPUT.innerHTML += "<p>Your name is " + userName + "</p>";
}
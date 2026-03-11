// What is JavaScript
//Long Answer

// JavaScript is a programming language that is commonly used to create interactive effects within web browsers. It allows developers
//  to create dynamic and responsive web pages by manipulating the Document Object Model (DOM) and handling events. JavaScript can be 
// used for a wide range of purposes, including form validation, creating animations, making asynchronous requests to servers, and much
//  more. It is an essential part of modern web development and is supported by all major web browsers.

// pretty much html the skeleton and css the skin of the web page and java script is the the muscle of the web page and 
// it is used to create the dynamic web page and it is used to create 

// this block is the code just to add numbers together lol :D
// ((WARNING)) JAVA SCRIPT IS CASE SENSITIVE SO BE CAREFUL WITH THE SPELLING OF THE FUNCTION NAMES AND THE VARIABLE NAMES
function add() {

let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;
let result = Number(num1) + Number(num2);

//this is the code to display the result in the web page
document.getElementById("result").innerText = "IS THIS WHAT YOU WANT?: " + result;
}

// block and the following are the same as above but for subtraction and multiplication and division
function subtract() {

    
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) - Number(num2);

    document.getElementById("result").innerText = "IS THIS WHAT YOU WANT?: " + result;
}

function multiply() {

    
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) * Number(num2);
    document.getElementById("result").innerText = "IS THIS WHAT YOU WANT?: " + result;
}

function divide() {

    
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) / Number(num2);
    document.getElementById("result").innerText = "IS THIS WHAT YOU WANT?: " + result;
}
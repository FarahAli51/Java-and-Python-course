
//Guess game
let secretNumber = 4;
let guess = prompt("Guess a number between 1 and 10:");

if (guess == secretNumber) {
    alert("Bingo! You guessed the secret number.");
} else if(guess + 1 == secretNumber || guess - 1 == secretNumber) {
    alert("You're close! Try again.");
} else {
    alert("Sorry, that's not the secret number.");
}

// Divisibility check
let number = prompt("Enter a number to check if it's divisible by 3:");
if (number % 3 === 0) {
    alert(number + " is divisible by 3.");
} else {
    alert(number + " is not divisible by 3.");
}

// Even or odd check
let num = prompt("Enter a number to check if it's even or odd:");
if (num % 2 === 0) {
    alert(num + " is an even number.");
}else{
    alert(num + " is an odd number.");
}

// Temperature check
let temperature = prompt("Enter the temperature in Celsius:");
if (temperature > 40) {
    alert("It is too hot outside."); 
} else if (temperature > 30) {
    alert("The weather today is normal.");
} else if (temperature > 20) {
    alert("Today's weather is cool.");
} else {
    alert("OMG! Today's weather is so cold.");
}

// Calculator
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");

if (operation === "+") {
    alert(num1 + " + " + num2 + " = " + (num1 + num2));
} else if (operation === "-") {
    alert(num1 + " - " + num2 + " = " + (num1 - num2));
} else if (operation === "*") {
    alert(num1 + " * " + num2 + " = " + (num1 * num2));
} else if (operation === "/") {
    alert(num1 + " / " + num2 + " = " + (num1 / num2));
} else if (operation === "%") {
    alert(num1 + " % " + num2 + " = " + (num1 % num2));
} else {
    alert("Invalid operation.");
}
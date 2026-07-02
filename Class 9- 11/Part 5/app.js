
// This program checks the type of character entered by the user.

let ch = String(prompt("Enter a character: ")).charAt(0);

let asciiValue = ch.charCodeAt(0);

if (asciiValue >= 65 && asciiValue <= 90) {
    console.log("The character is an uppercase letter.");
} else if (asciiValue >= 97 && asciiValue <= 122) {
    console.log("The character is a lowercase letter.");
} else if (asciiValue >= 48 && asciiValue <= 57) {
    console.log("The character is a digit.");
} else {
    console.log("The character is a special character.");
}

//Checking two integers.

let num1 = parseInt(prompt("Enter the first integer: "));
let num2 = parseInt(prompt("Enter the second integer: "));

if (num1 > num2) {
    console.log(num1 + " is greater than " + num2);
} else if (num2 > num1) {
    console.log(num2 + " is greater than " + num1);
} else {
    console.log("Both integers are equal.");
}

// Checking if a number is positive, negative, or zero.

let number = parseFloat(prompt("Enter a number: "));

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// Checking if the entered character is a vowel or consonant.

let char = String(prompt("Enter a character: ")).toLowerCase();

if (char.length !== 1 || !(/[a-z]/.test(char))) {
    console.log("Please enter a single alphabet character.");
} else if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log("The character is a vowel");
} else {
    console.log("The character is a consonant");
}



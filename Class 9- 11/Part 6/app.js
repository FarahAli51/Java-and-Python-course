
// Storing password

let password = "myPassword123";

let typePass = prompt("Please enter your password:");

if (typePass === password) {
    alert("Access granted!");
} else {  
    alert("Access denied! Incorrect password.");
}

// Fixing code

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
} // Missing bracket added here
else {
    greeting = "Good evening";
}

// Time-based greeting

var greeting;
var hour = prompt("Enter the current hour (0-24):");

if (hour < 0 || hour > 24) {
    alert("Please enter a valid hour between 0 and 24.");
} else {
    if (hour > 0 && hour < 12) {
        greeting = "Good Morning";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good afternoon";
    } else if (hour >= 17 && hour < 21) {
        greeting = "Good evening";
    }
    else {
        greeting = "Good night";
    }
}

alert(greeting);

// Taking city as input from user

let city = prompt("Enter the name of the city: ");

if (city === "Karachi") {
    console.log("Welcome to the city of lights!");
}

//Taking gender as input from user

let gender = prompt("Enter your gender: ");

if (gender.toLowerCase() === "male") {
    console.log("Good Morning Sir.");
}else if(gender.toLowerCase() === "female"){
    console.log("Good Morning Ma'am.");
}else{
    console.log("Good Morning!");
}

// Taking traffic signal color as input from user

let trafficSignal = prompt("Enter the color of the traffic signal: ");

if (trafficSignal.toLowerCase() === "red") {
    console.log("Must stop!");
} else if (trafficSignal.toLowerCase() === "yellow") {
    console.log("Get Ready!");
} else if (trafficSignal.toLowerCase() === "green") {
    console.log("Go!");
} else {
    console.log("Invalid traffic signal color.");
}

// Taking fuel level as input from user

let fuelLevel = parseFloat(prompt("Enter the remaining fuel in your car (in liters): "));

if (fuelLevel < 0.5) {
    console.log("Please refill your tank.");
} else {
    console.log("You have enough fuel.");
}
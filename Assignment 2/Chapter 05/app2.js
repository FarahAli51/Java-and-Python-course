//JS mathematical expressions

let l;
document.write(`<h3>Value after variable declaration is: ${l}</h3>`);
l =5;
document.write(`<h3>Initial value: ${l}</h3>`);
l++;
document.write(`<h3>Value after increment is: ${l}</h3>`);
l = l + 7;
document.write(`<h3>Value after addition is: ${l}</h3>`);
l--;
document.write(`<h3>Value after decrement is: ${l}</h3>`);
let remainder = l % 3;
document.write(`<h3>The remainder is: ${remainder}</h3>`);

//Cost of movie tickets
document.write("<h1>Cost of Movie Tickets:</h1>");
let ticketPrice = 600;
let numberOfTickets = ticketPrice * 5;
document.write(`<h5>Total cost of 5 tickets to a movies is $${numberOfTickets}</h5>`);

//Multiplication table of 4
document.write("<h3>Multiplication Table of 4:</h3>");
for (let initial =1; initial <= 10; initial++){
    document.write(`<h4> 4 x ${initial} = ${initial*4}</h4>`);
}

//Temperature conversion
document.write("<h1>Temperature Conversion:</h1>");
let Celsius = 25;
let Fahrenheit = (Celsius * 9/5) + 32;
document.write(`<h4>${Celsius}°C is equal to ${Fahrenheit}°F</h4>`);
let Fahrenheit2 = 70;
let Celsius2 = (Fahrenheit2 - 32) * 5/9;
document.write(`<h4>${Fahrenheit2}°F is equal to ${Celsius2}°C</h4>`);

//Shopping cart
document.write("<h1>Shopping Cart:</h1>");
let priceOfItem1 = 650;
let priceOfItem2 = 100;
let orderedQuantityOfItem1 = 3;
let orderedQuantityOfItem2 = 2;
let shippingCharges = 100;
let totalCost = (priceOfItem1 * orderedQuantityOfItem1) + (priceOfItem2 * orderedQuantityOfItem2) + shippingCharges;
document.write(`<h3>Total cost of your shopping cart is ${totalCost}</h3>`);

//Percentage of marks obtained
document.write("<h1>Marks Sheet:</h1>");
let totalMarks = 980;
let marksObtained = 804;
let percentage = (marksObtained / totalMarks) * 100;
document.write(`<h3>Total marks: ${totalMarks}</h3>`);
document.write(`<h3>Marks obtained: ${marksObtained}</h3>`);
document.write(`<h3>Percentage of marks obtained is ${percentage}%</h3>`);

//Currency in PKR
document.write("<h1>Currency in PKR:</h1>");
let USdollars = 10;
let SaudiRiyals = 25;
let totalCurrencyInPKR = (USdollars * 104.80) + (SaudiRiyals * 28);
document.write(`<h3>Total currency in PKR: ${totalCurrencyInPKR}</h3>`);

//arithmetic operations
let num = 10;
let result = (((num + 5)-4)*10)/2;
document.write(`<h3>Result of arithmetic operations is: ${result}</h3>`);

//Age calculator
document.write("<h1>Age Calculator:</h1>");
let currentYear = 2026;
let birthYear = 2008;
let age = currentYear - birthYear;
document.write(`<h3>Current Year: ${currentYear}</h3>`);
document.write(`<h3>Birth Year: ${birthYear}</h3>`);
document.write(`<h3>Your age is: ${age}</h3>`);

//The Geometrizer
document.write("<h1>The Geometrizer:</h1>");
let radius = 20;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * radius * radius;
document.write(`<h3>Circumference of the circle is: ${circumference}</h3>`);
document.write(`<h3>Area of the circle is: ${area}</h3>`);

//The lifetime supply calculator
document.write("<h1>The Lifetime Supply Calculator:</h1>");
let favoriteSnack = "Croissant";  
let currentAge = 17;
let maximumAge = 65;
let amountPerDay = 1;
let yearsRemaining = maximumAge - currentAge;
let totalSnacksNeeded = yearsRemaining * 365 * amountPerDay;
document.write(`<h4>You will need ${totalSnacksNeeded} ${favoriteSnack} to last you until the ripe old age of ${maximumAge}.</h4>`);
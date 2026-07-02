//mathematical operations

//Declaraing
let num1 = +prompt("Enter the first number:");
document.write(`<h3>The value of num1 is ${num1}</h3>`);


//Incremnting

//Pre-increment
document.write(`<h3>Current value of num1 is ${num1}</h3>`);
++num1;
document.write(`<h3>The value of num1 after pre-incrementing is ${num1}</h3>`);
//Post-increment
document.write(`<h3>Current value of num1 is ${num1}</h3>`);
num1++;
document.write(`<h3>The value of num1 after post-incrementing is ${num1}</h3>`);


//a, b and result
let a = 2;
let b = 1;
let result = --a - --b + ++b + b--;
// --a = 2-1 =1
// --b = 1-1 = 0
// --a - --b = 1 - 0 = 1
// --a - --b + ++b = 1 + 1 = 2
// --a - --b + ++b + b-- = 2 + 1 = 3
document.write(`<h3>The result of --a - --b + ++b + b-- when a = 2 and b = 1 is ${result}</h3>`);




// Greeting the user
let name = prompt("What is your name:");
document.write(`<h3>Greetings! ${name}</h3>`);

//multiplication table
let tableNum = +prompt("Enter a number to generate its multiplication table:");
document.write(`<h3>Multiplication Table of ${tableNum}</h3>`);
for (let i = 1; i <= 10; i++) {
    document.write(`<h3>${tableNum} x ${i} = ${tableNum * i}</h3>`);
}
if (tableNum === 0) {
    document.write(`<h2>Multiplication Table of 5</h2>`);
    for (let i = 1; i <= 10; i++) {
        document.write(`<h3>5 x ${i} = ${5 * i}</h3>`);
    }
}


//Total marks obtained in three subjects

let sub1name = prompt("Enter the name of Subject 1:");
let sub2name = prompt("Enter the name of Subject 2:");
let sub3name = prompt("Enter the name of Subject 3:");

let subject1 = +prompt(`Enter marks obtained in ${sub1name}:`);
let subject2 = +prompt(`Enter marks obtained in ${sub2name}:`);
let subject3 = +prompt(`Enter marks obtained in ${sub3name}:`);
let totalMarks = 300;

let obtainedMarks = subject1 + subject2 + subject3;
let percentage = (obtainedMarks / totalMarks) * 100;

document.write(`<h1>Marks Sheet</h1>`);

document.write(`<h3>Subject 1: ${sub1name}</h3>`);
document.write(`<h3>Subject 2: ${sub2name}</h3>`);
document.write(`<h3>Subject 3: ${sub3name}</h3>`);

document.write(`<h3>Total Marks: ${totalMarks}</h3>`);
document.write(`<h3>Marks Obtained: ${obtainedMarks}</h3>`);
document.write(`<h3>Percentage: ${percentage.toFixed(2)}%</h3>`);
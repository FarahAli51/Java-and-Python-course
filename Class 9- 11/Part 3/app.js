
// Take input marks of 3 subjects from user and calculate total, average and percentage.

let marks1 = parseFloat(prompt("Enter marks for subject 1: (0-100)"));
let marks2 = parseFloat(prompt("Enter marks for subject 2: (0-100)"));
let marks3 = parseFloat(prompt("Enter marks for subject 3: (0-100)"));

let total = marks1 + marks2 + marks3;
let average = total / 3;
let percentage = (total / 300) * 100;

console.log("Total Marks: " + total);
console.log("Average Marks: " + average);
console.log("Percentage: " + percentage + "%");

let grade;

if (percentage >= 80) {
    grade = "A1";
    console.log("Excellent!");
} else if (percentage >= 70) {
    grade = "B";
    console.log("Good!!");
} else if (percentage >= 60) {
    grade = "C";
    console.log("Need improvement!");
} else if (percentage < 60) {
    grade = "D";
    console.log("Keep trying!");
}
console.log("Grade: " + grade);
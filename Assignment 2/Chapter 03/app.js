
//Chapter 03

//Entering my age.
let age = 17;
alert("I am " + age + " years old");

//Counting visits to the page.
let visit = localStorage.getItem("Visit");
if (visit === null) {
    alert("This your first visit to this page");
    localStorage.setItem("Visit", "1");
} else {

    visit++;
    localStorage.setItem("Visit", visit);
    alert("You have visited this page " + visit + " times");
}

//Declaring variable birthYear
let birthYear = 2008;
//alert("My birthyear is " + birthYear );

document.write(`<h4>My birth year is ${birthYear}</h4>`);
document.write(`<h4>Data type of my declared variable is ${typeof birthYear}</h4>`);

//Declaring variable visitorName, productTitle and quantity.
let visitorName = "John Doe";
let productTitle = "T-shirt";
let quantity = 5;
document.write(`<h4>${visitorName} ordered ${quantity} ${productTitle}(s) on XYZ Clothing store</h4>`);





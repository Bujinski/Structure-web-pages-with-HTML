`use strict`;

alert("Welcome to the store!");

const userAnswer = prompt("Looking for a great book?");
console.log(userAnswer);

//string concatenation
document.write("Welocome to the store!");

if (userAnswer == "yes") {
    alert("Great! Let's find the best one!");
} else { 
    alert("No problem, let's find something interesting for you!");
}

const userLoc = prompt("Do you know where is our location?");
console.log(userLoc);

if (userLoc == "yes") {
    alert("Wonderful, let's see what books do we have!");
} else { 
    alert("No problem, you can find it by clicking the location link.");
}

const userFBook = prompt("Have you checked our books of the months?");
console.log(userFBook);

if (userFBook == "yes") {
    alert("Great, let's check the bestsellers then!");
} else { 
    alert("Great, let's check them now!");
}


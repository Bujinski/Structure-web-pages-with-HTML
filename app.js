`use strict`;

alert("Welcome to the store!");


function getAnswer() {
    const userAnswer = prompt("Looking for a great book?");
    return userAnswer;
}

let theirAnswer = getAnswer();

console.log(theirAnswer);

//string concatenation
function greetUser() {
    document.write("Welcome to the store!");
}

function specialMessage() {
    document.write("We glad to have you here!");
}


if (theirAnswer == "Yes") {
    alert("Great! Let's find the best one!");

} else {
    alert("No problem, let's find something interesting for you!");
}

// function userLocation() {
//     let userLoc = prompt("Do you know where is our location?");
//     console.log(userLoc);
//     if (userLoc == "") {
//         userLoc = prompt("Sorry, I definitely want to make sure you can find us. Please, answer yes or no...");
//     }

//     if (userLoc == "yes") {
//         alert("Wonderful, let's see what books we have!");
//     } else if (userLoc == "no") {
//         alert("No problem, you can find it by clicking the location link.");
//     }
// }
function userLocation(){
    let userLoc = prompt("Do you know where is our location?");

    while (userLoc !== "Yes" && userLoc !== "No") {
        userLoc = prompt("Sorry, I definitely want to make sure you can find us. Please, answer Yes or No...");
    }
    if (userLoc === "Yes") {
        alert("Wonderful, let's see what books we have!");
    } else if (userLoc === "No") {
        alert("No problem, you can find it by clicking the location link.");
    }
}

userLocation();

function manyBooks (){
    let numBooks = prompt ("How many books are you going to read this month? From 1-5?");
    numBooks = parseInt(numBooks);

    for (let i = 0; i < numBooks; i++){
        document.write('<img class="loop-img" src="mbook.jpg" alt="one year books" />');
    }
}
// manyBooks();



//const userFBook = prompt("Have you checked our books of the month?");
//console.log(userFBook);

//if (userFBook == "yes") {
    //alert("Great, let's check the bestsellers then!");
//} else {
//    alert("Great, let's check them now!");
//}

// ---------------------------------

// FUNCTIONS //

//function addTwoNumbers() {
    // let num1 = 7;
    // let num2 = 4;
    // let sum = num1 + num2;
   //  console.log(sum);
    // return sum;
// }

// Invoking it, or calling it

// addTwoNumbers();


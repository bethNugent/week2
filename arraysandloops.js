// Scroll through to find activities
//Day 3 - javascript

//Arrays 

//Example 1 - creating an array

// let coffeeOrder = [
//     "Alex - Tea",
//     "Ben - Turmeric Latte",
//     "Charlie - Whatever's new"
// ];

// console.log(coffeeOrder);


//0 indexing - the console will log the third item in the array
// console.log(coffeeOrder[2]);




//Example 2 - updating an item in an array using bracket notation []

// let coffeeOrder2 = [
//     "Alex - Tea",
//     "Ben - Turmeric Latte",
//     "Charlie - Whatever's new"
// ];

// coffeeOrder2[1] = "Ann - Vanilla Latte";
// console.log(coffeeOrder2);



//Example 3 - finding out how many items in an array using .length

// let coffeeOrder3 = [
//     "Alex - Tea",
//     "Ben - Turmeric Latte",
//     "Charlie - Whatever's new"
// ];

// console.log(coffeeOrder3.length);

//Example 4 - adding an item to an array using .push method

// let coffeeOrder4 = [
//     "Alex - Tea",
//     "Ben - Turmeric Latte",
//     "Charlie - Whatever's new"
// ];

// coffeeOrder4.push("Beth - Green Tea")
// console.log(coffeeOrder4)

//Example 5 - removing LAST item from an array using .pop method

// let coffeeOrder5 = [
//     "Alex - Tea",
//     "Ben - Turmeric Latte",
//     "Charlie - Whatever's new"
// ];

// coffeeOrder5.pop();
// console.log(coffeeOrder5)

//Example 6 - remove specific item from n array using .splice

// let coffeeOrder6 = [
//     "Alex - Tea",
//     "Ben - Turmeric Latte",
//     "Charlie - Whatever's new"
// ];

// coffeeOrder6.splice(1, 1);
// console.log(coffeeOrder6)


//--------------Activity 1 - log 3 songs log to console. Then add 2 songs to array and then remove last 1 added.

// let favouriteSongs = [
//     "Sly and the Family Stone - Everyday People",
//     "Kate Bush - Running Up That Hill",
//     "Grace Jones - Pull Up To The Bumper"
// ];

// // update favourite songs array using .push
// favouriteSongs.push("The Sugarcubes - Birthday", "Talking Heads - Once in a Lifetime")

// // .pop removes the last item from your list
// favouriteSongs.pop();


// console.log(favouriteSongs);




//----------Activity 2 - using MDN choose one of the following methods:
//map(), shift(), unshift(), splice(), slice()

// let numbers = [4, 9, 16, 25];

//returns a new array with the square root of the numbers
// let map = numbers.map(Math.sqrt);
// console.log(map);

// console.log(numbers);

// numbers.shift()  //removes the first item of an array
// numbers.unshift(36)  //adds a new item to the beginning of an array

// numbers.splice(2, 0, "Lemon", "Kiwi") //Adds items to an array - at position 2
// console.log(numbers)





//LOOPS

// let favDrink = [
//     "Fanta",
//     "Vimto",
//     "Lemon Water"
// ];

// console.log(favDrink[0]);
// console.log(favDrink[1]);
// console.log(favDrink[2]);


// loop - de - loop   FOR LOOP

// let favDrink2 = [
//     "Fanta",
//     "Vimto",
//     "Lemon Water",
//     "Turmeric Latte",
//     "Ginger tea"
// ];

// for (let i = 0; i < favDrink2.length; i++) {
//     console.log(favDrink2[i]);
// }


//using for loops with an if statement

// let multiplesTwo = [];

// for (let i = 0; i < 20; i++) {
//     if (i % 2 == 0) {
//         multiplesTwo.push(i)
//     }
// }

// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo`});


//While loop example - loops through until it meets 18

// let age = 15;
// while (age < 18) {
// console.log("You're a child!")
//     age++;
// }

// console.log("You're an adult!")


//Simple 4 card game - using JS and the math library

// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club"

// while(currentCard != "Spade") {
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
// }


//-------Activity 1 - create an array that lists your favourite films, up to 5 elements. 
//Add 2 more using a method and use a loop to cycle through the array.

// let favFilms = [
//     "Being John Malcovich",
//     "Shrek",
//     "Annihilation",
//     "Matrix",
//     "The Banshees of Inisherin"
// ];

// favFilms.push("In Bruges", "Fire of Love");

// for (let i = 0; i < favFilms.length; i++) {
//         console.log(favFilms[i]);
//     }



//--------Activity 2 - Generate 6 random numbers between 1 - 50 and log them to the console.


// use Math.floor rounds the number down to the nearest whole number
// Math.random generates a random number between 0 and 1
// * this by 50 so it will generate between 0 - 50
// +1 because we have round down using Math.floor

// let randomNumber = Math.floor(Math.random() * 50) + 1;

// console.log(randomNumber)



//---------Activity 3 - If we can create a loop to put 0-9 on the screen, how can we count from 9-0? 
//Create a program that does this.
 
// //an array from 0 - 9
// let reverseNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// //.reverse(); reverses the array
// reverseNumbers.reverse();

// // i = 0 starts at index 0 
// // i < .length tells the program to run for the whole length of the array
// // i++ increments by 1

// for (let i = 0; i < reverseNumbers.length; i++) {
//     console.log(reverseNumbers[i]);
// }


//OR--------------

// let backwards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let x = 9; x >= 0; x--) {
//     console.log(backwards[x]);
// }



//------------Activity 4 - display 4 films in an array & use a for loop to show each film in the array.
// use an if statement to check if the 3rd film in the array is Ghostbusters.
// if it is, return "Yay it's Ghostbusters". If it isn't return "Boo! We want Ghostbusters!"


// let films = [
//     "Babe",
//     "Spider Man",
//     "Ghostbusters",
//     "Puss in Boots"
// ];

// for (let i = 0; i < films.length; i++) 
//     if (films[2] === "Ghostbusters") {
//         console.log("Yay it's Ghostbusters")
//     } else {
//         console.log("Boo! We want Ghostbusters!")
//     }


//------------Activity 5 
//Generate a random number between 1 and 30 six times
//For each random number generated, check if this number is divisible by 7 or not.
//Log a message out to the console if it is divisible by 7 or not

//???? how to check 6 times

// let randomNumber2 = Math.floor(Math.random() * 30) + 1;
//     if (randomNumber2 % 7 == 0) {
//         console.log("This number is divisible by 7!")
//         } else {
//         console.log("This number is NOT divisible by 7!")
//         }
    

//---------Activity 6
// Imagine you're a programmer for a social media platform! 
// You have been tasked with builing a prototype for a mutual followers program.

//create 2 arrays of follwers e.g. bobsFollowers / hannahsFollowers
// In these arrays place 4 names as strings. Make sure there are 2 names that are in BOTH arrays.

//Using a nested loop iterate over both arrays and console.log out the matching follower


//NOT WORKING
let mikesFollowers = [
    "Sabrina Kent",
    "Marshall Thomas",
    "Cindy Walker",
    "Mike Smith"
];

let sarahsFollowers = [
    "Elyse Harding",
    "Karl Fevertree",
    "Mark Jones",
    "Cindy Walker"
];

let followersInCommon = [];

// for (let i = 0; i < mikesFollowers.length; i++) {
//     for (let j = 0; j < sarahsFollowers.length; j++) {
//         if (mikesFollowers[i] === sarahsFollowers[j]) {
//             console.log("follower in common")
//         } else {
//             console.log("no matching followers")
//         }
//     }
// }

// console.log(followersInCommon);

//OR - specific name

for (let i = 0; i < mikesFollowers.length; i++) {
    for (let j = 0; j < sarahsFollowers.length; j++) {
        if (mikesFollowers[i] === sarahsFollowers[j]) {
        followersInCommon.push(sarahsFollowers[j])
        } 
    }
}

console.log(followersInCommon);


//Activity 7 - research on..

//do...while loop --------- find out the difference between for loop, while loop, and do...while loop.
//Give an example of each.


//for loop example
//  for(initialisation; condition; increment/decrement) {
//      statements;
//  }

// for (i = 4; i > 0; i--) {
//     console.log(i)
// }

//while loop example
//while loops executes the code while the expression is true in the curley braces until the expression returns false
//while(expression) {
//   statement1;
//   statement2;
//   statement3;
// }

// let i = 4
// while (i > 0)
// {
//     console.log(i);
//     i--;
// }

//for loops and while loops have the same outcome 

//do...while loops

// let i = 4

// do {
//     console.log(i);
//     i--;
// } while (i > 0)

//while and do...while loops 
//do first and then checks the condition
//the do...while loops does first and then runs the condition so will always print once even if it is false
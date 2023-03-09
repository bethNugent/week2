//CODE NATION - wearecodenation.com
// Week 2 - Variables

//example 1

// console.log("All around the world");

//To access a specific index and make it uppercase
// console.log("All around the world".charAt(7).toUpperCase());
// console.log("All around the world".toUpperCase().charAt(7));

// console.log("All around the world"[7].toUpperCase());

// let const var 
//var has become obsolete

//let declaring a value that CAN be changed
//const declare a value that CANT be changed

//DATA TYPES - strings, numbers, boolean, null, symbols, undefined

// let favouriteDrink = "coffee";

// console.log(favouriteDrink);

//concatination + adding strings together
// console.log("My favourite drink is " + favouriteDrink); 

//template literal `${}`
// let favouriteDrink2 = "tea";

// console.log(`My 2nd favourite drink is ${favouriteDrink2}`);

// let name = "Beth";
// let age = 28;
// let favColour = "green";

// console.log(`My name is ${name} and I am ${age}. My favourite colour is ${favColour}.`);


//Activity 1 - Create a program that stores someone's name, age and favourite colour and log it to the console in a complete sentence using template literals.

// let personName = "Beth";
// let age = 28;
// let favColour = "green";

// console.log(`My name is ${personName} and I am ${age}. My favourite colour is ${favColour}.`);

//STRETCH - update all of your variables and write out a new sentence underneath your original

// personName = "Keith";
// age = 40;
// favColour = "pink";

// console.log(`My name is ${personName} and I am ${age}. My favourite colour is ${favColour}.`);

//Activity 2 - Create a program that stores what you eat today for breakfast, lunch and dinner. Log these to the console.

// let breakfast = "granola with mango, banana and greek yoghurt";
// let lunch = "rice and brocoli";
// let dinner = "king prawn stir fry";

// console.log(`Today for my breakfast I had ${breakfast}. For my lunch I have some leftover ${lunch} from last nights dinner. For dinner tonight, Conor is making us ${dinner}.`);

// STRETCH - update each of these variables to what you will eat tomorrow. Log these to the console.

// breakfast = "granola with blueberries, pineapple and greek yoghurt";
// lunch = "leftover stirfry";
// dinner = "falafel and veggies"

// console.log(`Tomorrow for my breakfast I will have ${breakfast}. For my lunch I will have ${lunch} from last nights dinner. For dinner, Conor is making us ${dinner}.`);

// Activity 3 - create a program that calculates the number of days from today to your birth date.

// let date1 = new Date("03/07/2023"); //american date  month/day/year
// let date2 = new Date("07/27/2023"); //this is my birthday

// let Difference_In_Time = date2.getTime() - date1.getTime();
// let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

// console.log(`Total number of days between dates ${date1} and ${date2} is ${Difference_In_Days}`);


//Activity 4 - Create 9 variables: space 1 to space 9. 
//Assign either the value of 'x', 'o', to each of these variables.
//Insert the variables into your board using the ${} syntax and make it look like the displayed board
//Scroll past examples to activities at bottom
// DAY 1 - Monday If Else Statement PM Plan 

//Example 1 -
// let weather = "snow" //variable

// if (weather === "sunny") {
//     console.log("Well, I better put some suncream on!")  //has the first condidtion been met?
// } else if (weather === "raining") {
//    console.log("Better take an umbrella") //has the second condition been met?
// } else {
//     console.log("Hmm, it could go either way!") //if neither of them have been met the console will print this
// }



//Example 2 - using Boolean data type true or false

// if (1 === "1") {   //=== is strict equals - does not compare between data types
//     console.log(true); //1 is a number '1' is a string 
// }
// else {
//     console.log(false); //it would be false 
// }



// //Example 3

// let place = "Manc";   //Variable
// let weather = "Cloudy"; //Variable

// if (place == "Manc" && weather == "Sunny") {
//     console.log("Check again"); //If the weather is "Sunny" the console will print out this statement
// }

// else if (place == "Manc" && weather == "Rain") {
//     console.log("Obvs"); //If the weather is "Rain" the console will print out this statement
// }

// else {
//     console.log("What it isn't raining?"); //Because the weather is "Cloudy" the console will print out this statement
//}

// && both conditions need to be met in order for the code to be run
// || OR

//Example 4
// let food = "sprouts";
// if (food == "pizza" || food == "nuggets") {
//     console.log("Tasty!");
// }
// else {
//     console.log("Not as tasty as pizza or nuggets")
// }




//Example 5 Switch Statements

// let car = "Peugeot";

// switch(car){       //object variable called car
//     case: "Ford",
//     case: "GM",
//         console.log("You've got an American car")
//     break;
//     case: "Peugeot",
//     case: "Citroen",
//         console.log("You've got a French boy!")
//     break;
//     case: "Honda",
//     case: "Toyota",
//     case: "Suzuki",
//         console.log("Japanese cars are dead quiet")
//     break;
//     case: "Mercedes",
//         console.log("You've got a proper posh car!")
//     break;
//     case: "Volkswagen",
//         console.log("German cars are really efficient!")
//     break;
//     case: "Hyundai",
//     case: "Kia",
//         console.log("South Korean cars are getting popular!")
//     break;
//     default;
//         console.log("Your car is not in the top 10 most popular cars")
// }


//Example 6 

// const grade = 87;

// switch (true) {
//     case grade >= 70:
//         console.log("Distinction");
//         break;
//     case grade >= 60:
//         console.log("Merit");
//         break;
//     case grade >= 50:
//         console.log("Pass");
//         break;
//     default;
//     console.log("Failed");
// }

//------------------------ACTIVITIES-------------------------------

//----------------Activity 1

//Create a variable called age. Write an if statement that logs "Yes I can serve you" if the age is greater than 17 and else logs "You aren't old enough".

// let age = 17;

// if  (age > 17) {
//     console.log("Yes I can serve you");
// }
// else {
//     console.log("You aren't old enough")
// }

//Stretch - take your if statement and add a variable called country in.

// let age = 18;
// let country = "UK";

// if  (age > 17 && country === "UK") {
//     console.log("Yes I can serve you");
// }
// else {
//     console.log("You aren't old enough")
// }


//----------------Activity 2 - Create a variable for any pizza topping. Create a switch statement, 
//if the topping is one of your favourite ingredients, log to the console 
// "These are important ingredients for my pizza." If you don't mind having pepperoni 
//for example log to the console "I don't mind having ${topping} on my pizza."
// Finally for any topping you don't like log "${topping} should not be on my pizza."

// let pizzaTopping = 'salad';

// switch (pizzaTopping) {
//     case 'tomato sauce':
//     case 'mozzarella':
//     case 'jalapenos':
//         console.log("These are important ingredients for my pizza.");
//         break;
//     case 'peppers':
//     case 'tuna':
//         console.log(`I don't mind ${pizzaTopping} on my pizza.`); // using back tick at start of string and then ${} as a placeholder
//         break;
//     default:
//         console.log(`${pizzaTopping} should not be on my pizza.`);  // `${} template literals
// }


//---------------Activity 3
//Create a variable called password. Check how many letters are in the password, 
//if there are less than 8, log to the console that the password is too short.
// Otherwise log the password to the console.

// let password = "Password123";

// if (password.length < 8) {
//    console.log("Password is too short");
// }
// else {
//    console.log(password);
// }

//--------------Activity 4
// Create a variable called num
// Check if the variable is divisible by 3 or 5. If it is, log "This number is divisible by 3 or 5".
// otherwise log something else.


// let num = 10; 

// if (num% 3 == 0 || num% 5 == 0) {                     
//     console.log("This number is divisible by 3 or 5")
// } else {
//     console.log("This number is NOT divisible by 3 or 5")
//     }
    


//------------------Activity 5 - create a variable called num. If num is divisible by 3 log "fizz" to the console. 
// if it's divisible by 5 log "buzz" to the console, 
// if it's divisible by both 3 and 5 log "fizz buzz" to the console.

    // let num = 10; 
    // if (num % 3 == 0 && num % 5 == 0) {                     
    // console.log("fizz buzz")
    // } else if (num % 5 == 0) {
    // console.log("buzz")
    // } else if (num % 3 == 0) {
    // console.log("fizz")
    // } else {
    // console.log("num")
    // }
    

//--------------------Activity 6// check if the number or string is the same backwards

// let palindromeNum = 302034;

// if (palindromeNum.toString().split('').reverse().join('') == palindromeNum) { 
//     console.log(true)
// } else {
//     console.log(false)
// }

//.toString() returns the content of a string
//.split('') splits a string into an array of substrings and returns the array
//.reverse() reverses the order of the elements in an array
//.join('') creates and returns a new string by concatenating all of the elements in an array 
//(or an array-like object), separated by commas or a specified separator string. If the array has only one item, 
//then that item will be returned without using the separator.




//------------------Activity 7 - create a variable called time, a variable called placeOfWork
// and a variable called townOfHome. Create an if statement that logs to the console
// where someone is at different times of the day.

// let time = 7;
// let placeOfWork = "Liverpool";
// let townOfHome = "New Brighton";

// if  (time >= 7 && time < 9) {
//     console.log(`commuting to ${placeOfWork} from ${townOfHome}`)
// } else if (time > 9 && time < 17) {
//     console.log("at work")
// } else {
//     console.log("at home")
// }


//----------------Activity 8 - Find the index of the last vowel

// let bethsString = 'fksnldlansfkjabhsfbkalsdmvlsdmvjkdbjhbaklsmkjfudbthcmmkjspljnca';
// let substr =  ['a','e','i','o','u'];
// const lastVowel = Math.max.apply(null, substr.map(letter => bethsString.lastIndexOf(letter)));
// console.log(lastVowel);

// Math.max() static method returns the largest of the numbers
// apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
// null value represents the intentional absence of any object value. 
// .map() method creates a new array from the results of calling a function for every element.
// lastIndexOf returns the last occurance of a substring in a string


//-------------Activity 9 - create a variable called word that takes a string.
// Create an if statement that checks if the last letter is the same as 
// the first. If it is true return true, otherwise return false.


// let word = "oreo"; 

// if (word.charAt(0) === word.charAt(word.length - 1)) {
//   console.log(true);
// } else {
//   console.log(false);
// }


//--------------Activity 10 - Create two variables called num1 and num2
//Create an if statement that checks if the result of the sum is even
//if it is return the number, otherwise return the numbers multiplied together

// let num1 = 1;
// let num2 = 2;
// let sum = num1 + num2;

// if (sum % 2 === 0) {
//     console.log(sum);
// }
// else {
//     console.log(num1 * num2)
// }
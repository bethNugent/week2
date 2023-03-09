// Monday If Else Statement PM Plan

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
let food = "sprouts";
if (food == "pizza" || food == "nuggets") {
    console.log("Tasty!");
}
else {
    console.log("Not as tasty as pizza or nuggets")
}




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
// Code Nation Thursday - Functions

// Example 1 

// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds");
// }

// pressGrindBeans();

// Example 2 

// let coffeeIsGrinding = true;

// const pressGrindBeans2 = () => {
//     if(coffeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
// }

// pressGrindBeans2()


// Example 3

// let accnumber = 50449921;

// const cashWithdrawl = (amount, accnumber) => {
//     console.log(`Whithdrawing ${amount} from account ${accnumber}`);
// }

// cashWithdrawl(300, accnumber);
// cashWithdrawl(30, 50449921)
// cashWithdrawl(400, 50409921)

// Example 4

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addUp(7, 3));
// console.log(addUp(2, 5));


// Example 5 

// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
// }

// const getFahrenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32
// }

// console.log("The temperature is " + getFahrenheit(15) + "°F");

// Function Declarations 
// Declaration (1)

// function square(number) {
//     return number * number
// }
// // output 25
// console.log(square(5));


// //Declaration (2)

// const square2 = function(number) {
//     return number + number
// }

// console.log(square2(5));


//---------------Activity 1 - take this code and turn it into arrow function syntax:

// function factorial (n) {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

//edited into arrow function syntax

// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(33));


//--------------Activity 2 - edit the below snippet to include two parameters 
//and a running order count updated when the function is called:

// let orderCount = 0;

// const takeOrder = (topping) => {
//     console.log(`Pizza with ${topping}`);
//     orderCount++;
// }

// takeOrder("pineapple");

//edited version

// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//     console.log(`Pizza number ${orderCount + 1} with ${topping1} and ${topping2}`);
//     orderCount++;
// }

// takeOrder("pineapple", "ham");
// takeOrder("tuna", "sweetcorn");
// takeOrder("mushrooms", "jalapenos");

//-----------Activity 3 - create a program that dispenses cash if your pin number is correct and your
//balance is equal to, or more than, the amount you're trying to withdraw.

let accnumber = 34567899
let balance = 207.51



const cashMachine = (inputAccnumber, cash) => {
    if ((accnumber === inputAccnumber) && (cash <= balance)) {
    console.log(`Here is your ${cash} from account number ${accnumber}.`);
} else {
    console.log("Sorry, incorrect account or insufficient funds in this account")
}
}

cashMachine(34567899, 207.51);
cashMachine(34567891, 207.51);
cashMachine(34567899, 2000.51);



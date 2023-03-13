//Example 1
//Activity 1 - object - output  specific key from an object

// const person = {
//     name: "Beth",
//     age: 28
// };

// console.log(person)
// console.log(person.age)
// console.log(person["name"])


//Example 2 - object and an if else statement

// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: ["Cappuccino", 
//             "Latte", 
//             "Filter coffee", 
//             "Turmeric Latte", 
//             "Ginger Tea", 
//             "English Breakfast Tea", 
//             "Earl Grey",
//         ],
//         breakfastOffer: "Free croissant with coffee",
//         lunchOffer: "Free drink with suprisingly priced sandwich",
//         noOffer: "Sorry no offer"
// };

// if (time < 1100) {
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// } else if (time < 1500) {
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// } else {
//     console.log(noOffer);
// }


//Activity -  create a key called weekendAlarm with a value saying "no alarm needed" with a value saying "get up at 7am"
//create a simple variable called day and one called alarm
//if its sat or sun set alarm to weekend alarm  - if its weekday set it to weekday alarm

//???????????
// let alarmMsg = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "wake up at 7am",
// }

// let day = "Wednesday", alarm
// if (day === "Saturday" || day === "Sunday") {
//     alarm = alarm.alarmMsg.weekendAlarm
// } else {
//     alarm = alarm.weekdayAlarm
// }


//Activity - add list of favourite songs to our person object and log them to the console.

// const person = {
//     name: "Beth",
//     age: 28
// };

// person.favSongs = ["David Bowie - Starman", "Talking Heads - Psycho Killer", "Kate Bush - Hounds of Love"];

// console.log(person.favSongs)


//--------Activity 1 -edit your person object to include a function called sayHi
//when it's called it should return "Hellow my name is ${}"

//???????????


// const person = {
//     me: "Beth",
//     age: 28,
//     favSongs: ["David Bowie - Starman", "Talking Heads - Psycho Killer", "Kate Bush - Hounds of Love"],
//    };

// person.sayHi = function() {
//     console.log(`Hello my name is ${this.me}`);
// }

// person.sayHi();




//-------------Activity 2 - create an object called pet with the key values of:
// name, typeOfPet, age, colour
//and methods called eat and drink. They should return a string saying [Your Pet Name] is eating/drinking.


// const pet = {
//     name: "Ralphy",
//     typeOfPet: "Cat",
//     age: 2,
//     colour: "Black and White",
//     drink: "water",
//     eat: "dreamies",
//     eatsAndDrinks: function(){
//         console.log(`${this.name} likes to drink ${this.drink} and eat ${this.eat}`);
//     }
// };

// pet.eatsAndDrinks();


//-----------Activity 3 - create an object called coffeeShop with key values of:
//branch, drinks with prices, food with prices
//add methods called drinksOrdered and foodOrdered
//they should return a string saying [your order] is... with all items choses with costs and total costs



const coffeeShop = {
    branch: "New Brighton",
    menu: [
        { service: "Orange Juice", price: 1.5 },
        { service: "Tea", price: 1.8 },
        { service: "Coffee", price: 1.9 },
        { service: "Coke", price: 1.6 }, 
        { service: "Tea cake", price: 2 },
        { service: "Crumpet", price: 1.2 },
        { service: "Blueberry Muffin", price: 1.7 },
        { service: "Soup and a Sandwich", price: 3.5 }
    ],


menuOrdered(orderArray) {

let total = 0;  

for (let i = 0; i < orderArray.length; i++) {
    for (let j = 0; j < this.menu.length; j++) {
        if (orderArray[i] === this.menu[j].service) {
            total += this.menu[j].price;
            }   
    }
}
console.log(total)
}

}

coffeeShop.menuOrdered(["Tea", "Coffee"])








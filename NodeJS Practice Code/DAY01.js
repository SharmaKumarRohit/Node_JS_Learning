// <---------------- DAY01 --------------->
// var prompt = require("prompt-sync")();

// Problem 1: Conditional Statements (if-else)
// You run a movie theater, and you want to offer discounts based on a person's age. Write a
// JavaScript program that asks the user for their age and then displays a message:
// - If the age is less than 18, display "You get a 20% discount!"
// - If the age is between 18 and 65 (inclusive), display "Normal ticket price applies."
// - If the age is 65 or older, display "You get a 30% senior discount!"

// Solution
// const age = prompt("Enter your age: ");
// if (age < 18) console.log("You get a 20% descount!");
// else if (age >= 18 && age <= 65) console.log("Normal ticket price applies.");
// else if (age > 65) console.log("You get a 30% senior discount!");
// else console.log("Please enter valid age (eg. 1 to 100)!");

// Problem 2: Variables (var and const)
// Create a JavaScript program to calculate the area of a rectangle. Ask the user for the length
// and width of the rectangle and store them in variables. Calculate and display the area using
// the formula: `area = length * width`.

// Solution
// const len = prompt("Enter length of rectangle: ");
// const width = prompt("Enter width of rectangle: ");
// const area = len * width;
// console.log(`Area of rectangle is: ${len} x ${width} = ${area}`);

// Problem 3: Objects and Properties
// You're creating an online store. Define a JavaScript object named "product" with the following
// properties:
// - name (string)
// - price (number)
// - inStock (boolean)
// Create at least three products using your object template and display their details using
// console.log.

// Solution
// class Product {
//   constructor(name, price, isStock) {
//     this.name = name;
//     this.price = price;
//     this.isStock = isStock;
//   }
// }
// const p1 = new Product("wheat", 2500, true);
// const p2 = new Product("pulse", 1500, false);
// const p3 = new Product("rice", 1200, true);
// console.log(p1);
// console.log(p2);
// console.log(p3);

// Problem 4: Arrays
// You're organizing a party and want to keep track of the guest list. Create an array called
// "guestList" and add the names of at least five guests. Then, write a program that checks if a
// given name is on the guest list. If the name is found, display "Welcome to the party, [name]!";
// otherwise, display "Sorry, you're not on the guest list."

// Solution
// const checkGuest = prompt("Enter guest name: ");
// const guestList = ["Arijeet", "Santosh", "Dheeraj", "Shivam", "Monu"];
// function checkGuestList(arr) {
//   for (let guest of arr) if (guest === checkGuest) return guest;
//   return -1;
// }
// const guestName = checkGuestList(guestList);
// if (guestName !== -1) console.log(`${guestName}, Welcome to the party`);
// else console.log("Sorry, you're not on the guest list.");

// Problem 5: JSON (JavaScript Object Notation)
// You're working on a weather app. Create a JSON object representing the weather forecast for
// a specific day. Include properties like "date," "temperature," "conditions," and "humidity."
// Display the information using console.log.

// Solution
const weatherForecast = {
  data: "30-06-2025",
  temperature: 31,
  conditions: "cloudy",
  humidity: 60,
};

console.log("Weather Forecast for", weatherForecast.data);
console.log("Temperature:", weatherForecast.temperature + "℃");
console.log("Conditions:", weatherForecast.conditions);
console.log("Humidity:", weatherForecast.humidity + "%");

// Remember to encourage your students to experiment and think creatively while solving these
// problems. They can use the concepts you've taught them to come up with their own solutions.
// This will not only help solidify their understanding but also foster their problem-solving skills in
// JavaScript.

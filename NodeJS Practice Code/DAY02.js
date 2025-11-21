// <------------ DAY02 ----------->
// Problem 1: NPM and Package.json
// You're starting a new project and want to manage your project's dependencies using NPM.
// Explain the purpose of NPM and how it helps in managing packages. Create a simple
// package.json file for your project, specifying the name, version, and a few dependencies of
// your choice.

// Solution
// NPM(Node Package Manager) is a tool that helps you manage libraries and packages
// in your Node.js projects. It allow you to easily install, update, and remove packages
// that you need for your project.

// To create a package.json file for your proejct, you can use the following example:
// {
//     "name": "nodejs-practice-code",
//     "version": "1.0.0",
//     "dependencies": {
//         "lodash": "^4.17.21"
//     }
// }

// Problem 2: Writing Functions
// Write a JavaScript function named calculateCircleArea that takes the radius of a circle
// as a parameter and returns the area of the circle. You can use the formula area = π *
// radius^2. Test the function with a few different radii.

// Solution
// function calculateCircleArea(radius) {
//   return Math.PI * radius ** 2;
// }
// const res1 = calculateCircleArea(3);
// const res2 = calculateCircleArea(5);
// const res3 = calculateCircleArea(10);
// console.log("Area of the circle = " + res1);
// console.log("Area of the circle = " + res2);
// console.log("Area of the circle = " + res3);

// Problem 3: Callback Functions
// Create a function named performOperation that takes two numbers and a callback
// function as parameters. The callback function should determine the operation to be performed
// (addition, subtraction, multiplication, or division) on the two numbers. Call the
// performOperation function with different numbers and callback functions for each
// mathematical operation.

// Solution
// function performOperation(a, b, callback) {
//   return callback(a, b);
// }
// const addition = performOperation(2, 3, (a, b) => a + b);
// const subtraction = performOperation(10, 6, (a, b) => a - b);
// const multiplication = performOperation(2, 5, (a, b) => a * b);
// const division = performOperation(10, 5, (a, b) => a / b);
// console.log("Addition = " + addition);
// console.log("Subtraction = " + subtraction);
// console.log("Multiplication = " + multiplication);
// console.log("Division = " + division);

// Problem 4: Using the 'fs' Module
// Write a Node.js program that uses the fs module to read the contents of a text file named
// "notes.txt" and display them in the console.

// Solution
// const fs = require("fs");
// fs.readFile("notes.txt", "utf8", (error, data) => {
//   if (error) throw error;
//   console.log(data);
// });

// Problem 5: Using 'os' Module
// Create a Node.js program that uses the os module to display the following system
// information:
// ● Total memory available (in bytes)
// ● Free memory available (in bytes)
// ● Operating system platform
// ● Number of CPU cores

// Solution
// const os = require("os");
// console.log("Total memory:", os.totalmem());
// console.log("Free memory:", os.freemem());
// console.log("Operating system platform:", os.platform());
// console.log("Number of CPU cores:", os.cpus().length);

// Problem 6: 'lodash' Usage
// Use the lodash library to solve the following problem: Given an array of numbers, write a
// function that returns the sum of all even numbers in the array. Use the _.sumBy function from
// lodash to achieve this.

// Solution
const _ = require("lodash");

// method1
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function sum(arr) {
//   const evenNum = arr.filter((n) => n % 2 === 0);
//   return _.sumBy(evenNum);
// }
// console.log("sum of even number = " + sum(num));

// method2
function sumOfEvenNumbers(arr) {
  const evenNumbers = _.filter(arr, (n) => n % 2 === 0);
  return _.sumBy(evenNumbers);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumOfEvenNumbers(numbers));

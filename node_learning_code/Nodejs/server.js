// function add(a, b) {
//   return a + b;
// }

// const add = function (a, b) {
//   return a + b;
// };

// const add = (a, b) => {
//   return a + b;
// };

// const add = (a, b) => a + b;

// var result = add(2, 8);
// console.log(result);

// <--------- IIFE(Immediatly Invoked Function Expression) --------->
// An Immediately Invoked Function Expression (IIFE), pronounced "iffy," is a
// JavaScript function that is defined and executed immediately after its creation.

// // Standard IIFE
// (function () {
//   // Code inside the IIFE
// })();

// // IIFE with arguments
// (function (param1, param2) {
//   // Code using param1 and param2
// })(arg1, arg2);

// // Arrow function variant of IIFE (ES6+)
// (() => {
//   // Code inside the IIFE
// })();

// // Async IIFE (ES8+)
// (async () => {
//   // Asynchronous code inside the IIFE
// })();

// (function () {
//   console.log("Rohit is added");
// })();

// (function (a, b) {
//   console.log(a + b);
// })(2, 3);

// (() => {
//   console.log("Hii");
// })();

// (async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await response.json();
//   console.log(data);
// })();

// <------- callback function ------->
// method1
// function callback() {
//   console.log("callback function called");
// }
// function add(a, b, callback) {
//   const result = a + b;
//   console.log(result);
//   callback();
// }
// add(2, 5, callback);

// method2
// function add(a, b, callback) {
//   const result = a + b;
//   console.log(result);
//   callback();
// }
// add(2, 3, function () {
//   console.log("successfully added your result");
// });

// method3
// function add(a, b, callback) {
//   const result = a + b;
//   console.log(result);
//   callback();
// }

// add(3, 7, () => console.log("successfully added"));

// <------ Core Modules of NodeJS(fs and os module) ------->
// let fs = require("fs");
// let os = require("os");

// const user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile("greeting.txt", "Hi, " + user.username + "\n", () =>
//   console.log("file is created")
// );

// // console.log(os);
// console.log(fs);

// <-------- fs module -------->
// const fs = require("fs");

// // "utf8" stands for UTF-8 (Unicode Transformation Format - 8-bit). It is a character
// // encoding used to store and read text in files — especially in Node.js.
// // Read a file asynchronously
// fs.readFile("greeting.txt", "utf8", (error, data) => {
//   if (error) throw error;
//   console.log(data);
// });

// // Write to a file
// fs.writeFile("output.txt", "Hello Node.js!\n", (error) => {
//   if (error) throw error;
//   console.log("File written successfully!");
// });

// <------ os module ------>
// const os = require("os");
// console.log("OS Platform:", os.platform());
// console.log("CPU architecture:", os.arch());
// console.log("Free memory:", os.freemem());
// console.log("Total memory:", os.totalmem());
// console.log("User Info:", os.userInfo());

// <--------- import files from ----------->
// CommonJS(Default in Node.js)
// Uses require() and module.exports.
// const notes = require("./notes");
// const age = notes.age;
// const result = notes.addNumber(2, 3);
// console.log(age);
// console.log("result:", result);

// <----------- lodash library ----------->
var _ = require("lodash");

const data = ["person", "person", 1, 2, 1, 2, "name", "age", "2"];
const filter = _.uniq(data);
console.log(filter);

console.log(_.isString(true));

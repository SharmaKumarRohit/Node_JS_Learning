// <------------ DAY03 ------------>
// Problem 1: Understanding Servers and Express.js
// Explain in your own words what a server is in the context of Node.js. Then, write step-by-step instructions on
// how to create a basic server using Express.js.

// solution
// A server in Node.js is a computer program that receives and responds to requests from clients (like
// web browsers or mobile apps) over a network. It processes requests and sends back appropriate
// respones.
// To create basic server using Express.js:
// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//   res.send("Hello from Express server!");
// });
// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

// Problem 2: JSON Manipulation
// a) Define JSON and explain its importance in web development.
// b) Given a JSON data string: {"name": "Alice", "age": 25, "hobbies": ["reading",
// "painting"]}, explain how you would extract the value of the "age" key.
// c) How would you convert the following object into a JSON data string? {"title": "Book", "pages":
// 200}

// solution
// a) JSON(JavaScript Object Notation) is a lightweight data interchange format used to exchange data between
//    a server and a client. It's easy for humans to read and write, and it's easy for machines to parse and generate.
// b) To extract the value of the "age" key from the JSON data:
// const jsonString =
//   '{"name": "Alice", "age": 25, "hobbies": ["reading","painting"]}';
// const jsonObject = JSON.parse(jsonString);
// const age = jsonObject.age;
// console.log(age);
// c) To convert an Object into a JSON data string:
// const jsonObject = { title: "Book", pages: 200 };
// const jsonString = JSON.stringify(jsonObject);
// console.log(jsonString);

// Problem 3: API and Endpoints
// a) Define what an API is and its role in software development.
// b) Explain what an endpoint is in the context of web APIs.
// c) Provide an example of an endpoint you might find in a social media application.

// solution
// a) An API(Application Programming Interface) is a set of rules and protocols that allows different software
//    components to communicate and interact with each other. It defines how requests and respones should be
//    structured.
//    It's role in software development:
//      1. Connects frontend and backend in web apps.
//      2. Allows apps to send or receive data from a server.
//      3. Enables integration with external services(like payment gateways, maps, weather, etc.)
//    Example: A weather app uses an API to get weather data from a weather server.
// b) And endpoint is a specific URL(Uniform Resource Locator) that represents a particular function or service
//    provided by an API. It's the specific location where clients can make requests to access certain data or perform
//    actions.
// c) Example of an endpoint in a social media app: /users/{username} to retrieve user information based on
//    thier username.

// Problem 4: Creating a Route with Express.js
// a) Explain what the HTTP GET method is used for in the context of web development.
// b) Write the code to create a simple Express.js route that responds with "Hello, World!" when a user visits the
// root URL ("/").

// solution
// a) The HTTP GET method is used to request data from a server. It's often used to retrieve information or
//    resources from a specific URL.
// b) Code to create a simple Express.js route:
// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });
// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

// Problem 5: JSON Parsing and Object Conversion
// a) Given a JSON data string: {"product": "Laptop", "price": 999.99}, explain how you would
// parse it into a JavaScript object.
// b) You have an object: { "name": "Bob", "age": 30 }. How would you convert it into a JSON data
// string?

// solution
// a) To parse a JSON data string into a JavaScript Object:
// const jsonData = '{"product": "Laptop", "price": 999.99}';
// const jsonObject = JSON.parse(jsonData);
// console.log(jsonObject.product);
// b) To convert an object into a JSON data string:
// const obj = { name: "Bob", age: 30 };
// const jsonString = JSON.stringify(obj);
// console.log(jsonString);

// Problem 6: Building a Basic API
// Imagine you're building an API for a weather app. Your API needs an endpoint to retrieve the current weather.
// Create an Express.js route that responds with a JSON object containing the current temperature, conditions,
// and city.

const express = require("express");
const app = express();

app.get("/weather", (req, res) => {
  const weatherData = {
    temperature: 29,
    conditions: "cloudy",
    city: "Jamui",
  };
  res.json(weatherData);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

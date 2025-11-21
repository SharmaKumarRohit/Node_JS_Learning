// <----------- server in nodejs -------------->
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Hello from the server!");
// });

// server.listen(3000, () =>
//   console.log("Server running on http://localhost:3000")
// );

// <-------- JSON object --------->
// const jsonString =
//   '{"name": "Rohit", "age": 23, "city": "Jamui, Bihar, India"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);

// const jsonObject = { name: "Rohit", age: 23, city: "Jamui, Bihar, India" };
// const jsonString = JSON.stringify(jsonObject);
// console.log(jsonString);
// console.log(typeof jsonString);

// <-------- Express js -------->
// const express = require("express");
// const app = express();
// app.get("/", (req, res) => res.send("Hello from express.js!"));
// app.listen(3000, () => console.log("server running at http://localhost:3000"));

// <--------- create a server --------->
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my hotel... How i can help you?, we have list of menu");
});

app.get("/chicken", (req, res) => {
  res.send("sure sir, i would love to serve chicken");
});

app.get("/idli", (req, res) => {
  const customized_idli = {
    name: "rava idli",
    size: "10 cm diameter",
    is_sambhar: true,
    is_chutney: false,
  };
  res.send(customized_idli);
});

app.post("/items", (req, res) => {
  res.send("items is saved");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});

const express = require("express");
const app = express();
const PORT = 8000;

//Defining Routes
//Home Route
app.get("/", (req, res) => {
  res.send("<h1>Home Page will be here</h1>");
});

//Contact Us Route
app.get("/contact", (req, res) => {
  res.send("<h1>Contact Us Page will be here</h1>");
});

//Products Route
app.get("/products", (req, res) => {
  res.send("<h1>Products Page will be here</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is Listening!`);
});

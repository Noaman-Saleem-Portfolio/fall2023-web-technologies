const express = require("express");
const app = express();
const path = require("path");

const port = 8000;

//setting view engine
app.set("view enginge", "ejs");
// app.set("views", "views");
app.set("views", path.join(__dirname, "views"));

//Defining Routes
//Home Route
app.get("/", (req, res) => {
  //   console.log(process.cwd());
  //   console.log(__dirname);
  res.render("home.ejs");
});

//Contact Route
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

//random
app.get("/random", (req, res) => {
  const number = Math.floor(Math.random() * 10) + 1;
  // console.log(number);
  res.render("random.ejs", { number });
});

//courses
app.get("/courses", (req, res) => {
  let courses = ["OOP", "Web", "DS", "Database"];
  res.render("courses.ejs", { courses });
});

//all
app.get("*", (req, res) => {
  res.send("Wrong URL!");
  //   res.redirect("/");
});

app.listen(port, () => {
  console.log(`Sever is listening at port ${port}`);
});

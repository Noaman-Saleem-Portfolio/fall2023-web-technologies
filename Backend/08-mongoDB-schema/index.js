const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./database/database");
const { PORT } = require("./config/config");
const Blog = require("./models/Blog");

const port = PORT;

//Connecting to DB
connectDB();

////setting folder for static assets
// app.use(express.static("public"))
app.use(express.static(path.join(__dirname, "public")));

//setting ejs
app.set("view engine", "ejs");
// app.set("views","views")
app.set("views", path.join(__dirname, "views"));

//home route
app.get("/", (req, res) => {
  res.render("home");
});

//services route
app.get("/services", (req, res) => {
  res.render("services");
});

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});

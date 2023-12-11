const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./database/database");
const { PORT } = require("./config/config");
const Blog = require("./models/Blog");
const router = require("./routes/index");

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

//Using Routes
app.use(router);

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});

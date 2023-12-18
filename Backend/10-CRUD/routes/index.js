const express = require("express");
const blogController = require("../controller/blogController");

const router = express.Router();

//home route
router.get("/", blogController.home);

//Blog Routes
//Create new Blog page
router.get("/blog/new", blogController.newBlog);

//Create new blog
router.post("/blog", blogController.create);

//Read Blogs
router.get("/blog", blogController.readBlogs);

module.exports = router;

const Blog = require("../models/Blog");

const blogController = {
  //home route
  home(req, res) {
    res.render("home");
  },

  //new blog page
  newBlog(req, res) {
    res.render("new");
  },

  //create blog
  async create(req, res) {
    // console.log(req.body);
    const { title, description, image } = req.body;

    const blog = new Blog({ title, description, image });

    try {
      //saving new document in blog collection
      const p = await blog.save();
      console.log(p);
      return res.redirect("/");
    } catch (error) {
      console.log(error);
      return res.redirect("/blog/new");
    }
  },

  //Read Blogs
  async readBlogs(req, res) {
    try {
      const blogs = await Blog.find();
      console.log(blogs);
      return res.render("index", { blogs });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = blogController;

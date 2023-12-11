const blogController = {
  home: (req, res) => {
    res.render("home");
  },

  services: (req, res) => {
    res.render("services");
  },
};

module.exports = blogController;

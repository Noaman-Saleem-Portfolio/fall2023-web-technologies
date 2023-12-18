const express = require("express");
const blogController = require("../controller/blogController");

const router = express.Router();

router.get("/", blogController.home);

router.get("/services", blogController.services);

module.exports = router;

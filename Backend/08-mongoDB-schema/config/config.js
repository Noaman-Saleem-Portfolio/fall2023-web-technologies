require("dotenv").config();

// console.log(process);

const MONGO_CONNECTION_URI = process.env.MONGO_CONNECTION_URI;
const PORT = process.env.PORT;

module.exports = {
  MONGO_CONNECTION_URI,
  PORT,
};

const mongoose = require("mongoose");
const { MONGO_CONNECTION_URI } = require("../config/config");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGO_CONNECTION_URI);
    // console.log(connect);
    console.log(
      `Connected to MongoDB server at host ${connect.connection.host}`
    );
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;

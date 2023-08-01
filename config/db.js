const mongoose = require("mongoose");

require("dotenv").config();

const connectDB = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database connection successfully established"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;

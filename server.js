const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;

// middleware for parsing json data from request
app.use(express.json());

const todoRoutes = require("./routes/todoRoutes");

// mounting routes
app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const connectDB = require("./config/db");
connectDB();

// default route
app.get("/", (req, res) => {
  res.send("Home Route");
});

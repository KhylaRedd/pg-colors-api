// app.js
// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const colorsControllers = require('./Controller/colorsControllers.js')

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use('/colors', colorsControllers)

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Colors App");
});

// EXPORT
module.exports = app;
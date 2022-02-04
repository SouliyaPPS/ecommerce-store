const express = require("express");
const app = express();

app.use(express.json());

// require the product route
const product = require("./routes/productRoute");

app.use("/api/v1", product);

module.exports = app;

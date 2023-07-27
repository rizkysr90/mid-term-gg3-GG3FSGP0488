const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const apiV1 = require("./routers/index");
const mongoose = require("mongoose");
const mongoStr = process.env.MONGO_URI;
const errorHandler = require("./middlewares/errorHandler.middleware");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect to the database");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.use(cors());
app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
    ].join(" ");
  })
);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/api/v1/", apiV1);

// Error Handle Middleware
app.use(errorHandler);

module.exports = app;

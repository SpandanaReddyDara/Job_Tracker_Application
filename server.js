const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const fs = require("fs");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// db
mongoose
  .connect("mongodb://127.0.0.1:27017/job", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

// app middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

//route middleware
fs.readdirSync("./routes").map((routes) =>
  app.use("/api", require(`./routes/${routes}`))
);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API is running on port ${port}`));

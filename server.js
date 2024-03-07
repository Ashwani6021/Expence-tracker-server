require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let cors = require("cors");

const path = require("path");

const router = require("./router/transaction-router");
const connectDb = require("./utils/db");

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(express.json());

app.use("/api/trans", router);

const PORT = 8000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});

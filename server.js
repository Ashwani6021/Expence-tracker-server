require("dotenv").config();
const express = require("express");
const app = express();
let cors = require("cors");

app.use(cors());
const router = require("./router/transaction-router");
const connectDb = require("./utils/db");
app.use(express.json());

app.use("/api/trans", router);

const PORT = 8000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});

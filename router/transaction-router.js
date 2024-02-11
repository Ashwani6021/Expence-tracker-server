const express = require("express");
const router = express.Router();
const transcontrollers = require("../controllers/transcontrollers");

router
  .route("/")
  .get(transcontrollers.getTransaction)
  .post(transcontrollers.addTransaction);

module.exports = router;

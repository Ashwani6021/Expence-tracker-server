const Transaction = require("../models/transaction-model");

const getTransaction = async (req, res) => {
  try {
    // console.log("reached");
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};

const addTransaction = async (req, res) => {
  try {
    console.log(req.body);

    const { type, category, amount, date } = req.body;
    const transaction = Transaction.create({
      type,
      category,
      amount,
      date,
    });
    return res.status(201).json({
      message: "Transaction add successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    // res.status(500).json({msg: "Internal server error"})
  }
};
module.exports = { getTransaction, addTransaction };

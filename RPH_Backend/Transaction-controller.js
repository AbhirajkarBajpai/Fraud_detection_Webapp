const Transaction = require("./Transaction");

const getTen = async (req, res) => {
  const Id = req.params.id;
  console.log(Id);
  try {
    const transaction = await Transaction.findOne({
      Search_id: Id,
    });

    if (!transaction) {
      return res.status(404).json({ error: "Transaction not found" });
    }

    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getCustomer = async (req, res) => {
  try {
    const { cI, i } = req.params; // Access parameters from URL

    // Validate parameters
    if (!cI || !i) {
      return res
        .status(400)
        .json({ error: "Both cI and i parameters are required." });
    }

    // Convert parameters to numbers
    const customerId = parseInt(cI);
    const searchId = parseInt(i);

    // Query the database for transactions matching the criteria
    const transactions = await Transaction.find({
      CustomerID: customerId,
      Search_id: { $gte: 1, $lte: searchId },
    });

    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getCustomersprev = async (req, res) => {
  try {
    const customerId = parseInt(req.params.cI);
    const searchId = parseInt(req.params.i);

    // Find transactions for the specified customer with Search_id less than the provided value
    const transactions = await Transaction.find({
      CustomerID: customerId,
      Search_id: { $lt: searchId },
    })
      .sort({ Search_id: -1 })
      .limit(1);

    if (transactions.length > 0) {
      res.json(transactions[0]); // Return the latest transaction with Search_id less than provided value
    } else {
      res.json({ message: "No matching transactions found." });
    }
  } catch (error) {
    console.error("Error fetching customer transactions:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



const postTransaction = async (req, res) => {
  try {
    // Extract transaction data from the request body
    const transactionData = req.body;

    // Create a new Transaction instance
    const newTransaction = new Transaction(transactionData);

    // Save the transaction to the database
    await newTransaction.save();

    res.status(201).json({ message: 'Transaction posted successfully.' });
  } catch (error) {
    console.error('Error posting transaction:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const start = (req, res) => {
  res.send("Hello, this is your Node.js backend!");
};

exports.getTen = getTen;
exports.start = start;
exports.getCustomersprev = getCustomersprev;
exports.getCustomer = getCustomer;
exports.postTransaction = postTransaction;


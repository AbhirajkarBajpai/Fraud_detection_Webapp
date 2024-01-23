
const fraud = require("./Fraud");

const postone = async (req, res) => {
    try {
      // Extract transaction data from the request body
      const fraudData = req.body;
  
      // Create a new Transaction instance
      const newfraud = new fraud(fraudData);
  
      // Save the transaction to the database
      await newfraud.save();
  
      res.status(201).json({ message: 'Transaction posted successfully.' });
    } catch (error) {
      console.error('Error posting transaction:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  exports.postone = postone;
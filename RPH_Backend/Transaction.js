const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({

  Search_id: {
    type: Number,
    required: true,
  },
  
  TransactionID: {
    type: String,
    required: true,
  },
  CustomerID: {
    type: Number,
    required: true,
  },
  TransactionType: {
    type: String,
    required: true,
  },
  AmountTransferred: {
    type: Number,
    required: true,
  },
  ReceiverID: {
    type: Number,
    required: true,
  },
  InitialBalanceSender: {
    type: Number,
    required: true,
  },
  FinalBalanceSender: {
    type: Number,
    required: true,
  },
  InitialBalanceReceiver: {
    type: Number,
    required: true,
  },
  FinalBalanceReceiver: {
    type: Number,
    required: true,
  },
  FraudFlag: {
    type: Number,
    required: true,
  },
  TransactionDate: {
    type: Date,
    required: true,
  },
  HomeBranchCoordinate: {
    type: String,
    required: true,
  },
  CurrentCoordinate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Transaction Data", transactionSchema);

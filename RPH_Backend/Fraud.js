const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fraudSchema = new Schema({
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
  Distance: {
    type: Number,
    required: true,
  },
  KYC: {
    type: Number,
    required: true,
  },
  MobileNumber: {
    type: Number,
    required: true,
  },
  AverageAmounts: {
    type: Number,
    required: true,
  },
  Remark: {
    type: String,
  },
});

module.exports = mongoose.model("fraud Data", fraudSchema);

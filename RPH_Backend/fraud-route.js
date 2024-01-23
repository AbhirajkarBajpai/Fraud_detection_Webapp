const express = require("express");
const {
  postone,
} = require("./fraud-controller");

const poster = express.Router();
poster.post("/fraudTransactions", postone);
module.exports = poster;

const express = require("express");
const {
  getTen,
  start,
  getCustomer,
  getCustomersprev,
  postTransaction
} = require("./Transaction-controller");

const router = express.Router();
router.post("/Transactions", postTransaction);
router.get("/Transactions/:id", getTen);
router.get("/Transactions/:cI/:i", getCustomer);
router.get("/TransactionsPrev/:cI/:i", getCustomersprev);


router.get("/", start);

module.exports = router;

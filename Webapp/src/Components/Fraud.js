import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Fraud = ({ transactions }) => {
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [actionPerformed, setActionPerformed] = useState(false);

  const handleCustomerClick = (customerId) => {
    setSelectedCustomerId(customerId);
  };

  const handleConfirmClick = async (transactionId, confirmType) => {
    const updatedTransactions = transactions.map((transaction) => {
      if (transaction.TransactionID === transactionId) {
        return {
          ...transaction,
          FraudFlag: confirmType === "confirm" ? 1 : 0,
        };
      }
      return transaction;
    });

    if (confirmType === "confirm") {
      try {
        // Assuming your API request is successful
        await axios.post("http://localhost:5000/post/fraudTransactions", {
          body: updatedTransactions.find(
            (transaction) => transaction.TransactionID === transactionId
          ),
        });

        setActionPerformed(true); // Set the state to indicate action is performed
      } catch (error) {
        console.error("Error confirming fraud status:", error);
      }
    }
  };

  return (
    <div className="flex flex-col py-12 px-14">
      <h1>Fraud Transactions</h1>
      <div className="h-[500px] overflow-y-scroll">
        <table className="table-auto w-full">
          <thead className="sticky top-0">
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">Search ID</th>
              <th className="px-4 py-2">Transaction ID</th>
              <th className="px-4 py-2">Customer ID</th>
              <th className="px-4 py-2">Transaction Type</th>
              <th className="px-4 py-2">Amount Transferred</th>
              <th className="px-4 py-2">Receiver ID</th>
              <th className="px-4 py-2">Fraud Flag</th>
              <th className="px-4 py-2">Actions</th>
              {/* Add more columns based on your transaction data */}
            </tr>
          </thead>
          <tbody>
            {transactions?.map(
              (transaction) =>
                // Check if transactions is defined before mapping
                transaction.FraudFlag === 1 && (
                  <tr key={transaction.Search_id} className="bg-red-500">
                    <td className="border px-4 py-2">
                      {transaction.Search_id}
                    </td>
                    <td className="border px-4 py-2">
                      {transaction.TransactionID}
                    </td>
                    <td className="border px-4 py-2">
                      <Link
                        to={`/customer-history/${transaction.CustomerID}`}
                        onClick={() =>
                          handleCustomerClick(transaction.CustomerID)
                        }
                      >
                        {transaction.CustomerID}
                      </Link>
                    </td>
                    <td className="border px-4 py-2">
                      {transaction.TransactionType}
                    </td>
                    <td className="border px-4 py-2">
                      {transaction.AmountTransferred}
                    </td>
                    <td className="border px-4 py-2">
                      {transaction.ReceiverID}
                    </td>
                    <td className="border px-4 py-2">
                      {transaction.FraudFlag}
                    </td>
                    <td className="border px-4 py-2">
                      {!actionPerformed && ( // Render buttons only if the action is not performed
                        <>
                          <button
                            onClick={() =>
                              handleConfirmClick(
                                transaction.TransactionID,
                                "confirm"
                              )
                            }
                          >
                            Confirm
                          </button>
                          <button
                            onClick={() =>
                              handleConfirmClick(
                                transaction.TransactionID,
                                "notConfirm"
                              )
                            }
                          >
                            Not Confirm
                          </button>
                        </>
                      )}
                    </td>
                    {/* Add more columns based on your transaction data */}
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Fraud;

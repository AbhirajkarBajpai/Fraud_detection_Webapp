import React from "react";
import NewGraph from "./NewGraph";

const Showdata = (props) => {
  // Check if transactions is defined before filtering
  console.log("lets check", props.transactions);
  const filteredTransactions = (props.transactions || []).filter(
    (transaction) => transaction.TransactionType === props.transactionType
  );

  console.log("credit", filteredTransactions);

  return (
    <div className="flex flex-col py-12 px-14">
      <h1 className="text-white text-2xl font-bold relative text-center">
        {props.name}
      </h1>

      {/* Display the transactions in a table */}
      <div className="py-10">
        <h1 className="font-bold text-2xl mb-4">Transaction Table:</h1>
        <div className="h-[500px] overflow-y-scroll">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-800 text-white sticky top-0">
                <th className="px-4 py-2">Search ID</th>
                <th className="px-4 py-2">Transaction ID</th>
                <th className="px-4 py-2">Customer ID</th>
                <th className="px-4 py-2">Transaction Type</th>
                <th className="px-4 py-2">Amount Transferred</th>
                <th className="px-4 py-2">Receiver ID</th>
                <th className="px-4 py-2">Fraud Flag</th>
                {/* Add more columns based on your transaction data */}
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr
                  key={transaction.Search_id}
                  className={transaction.FraudFlag ? "bg-red-500" : ""}
                >
                  <td className="border px-4 py-2">{transaction.Search_id}</td>
                  <td className="border px-4 py-2">
                    {transaction.TransactionID}
                  </td>
                  <td className="border px-4 py-2">{transaction.CustomerID}</td>
                  <td className="border px-4 py-2">
                    {transaction.TransactionType}
                  </td>
                  <td className="border px-4 py-2">
                    {transaction.AmountTransferred}
                  </td>
                  <td className="border px-4 py-2">{transaction.ReceiverID}</td>
                  <td className="border px-4 py-2">{transaction.FraudFlag}</td>
                  {/* Add more columns based on your transaction data */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="py-10 flex flex-col justify-around">
        <h1 className="flex right-6 font-bold text-2xl">Data Visualization:</h1>
        <div className="flex flex-row justify-start">
          <div className="flex justify-around  pt-10 shadow-xl shadow-slate-950 rounded w-full h-25">
            <NewGraph totalTransactions={filteredTransactions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showdata;

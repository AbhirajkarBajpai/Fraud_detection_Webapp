import React from "react";
import PieChart from "./Pie";
import Cards from "./Cards";
import Linechart from "./Linechart";
import ChartComponent from "./ChartComponent";
import RadarChart from "./RadarChart";
import ChartEvent from "./ChartEvent";

function Dashboard({ transactions }) {
  // console.log("last chk", transactions);
  const tableHeightThreshold = 500;

  return (
    <div className="flex flex-col py-12 px-14">
      <h1 className="text-black text-2xl font-bold relative text-center">
        Dashboard
      </h1>

      {/* Display the transactions in a table */}
      <div className="py-10">
        <h1 className="font-bold text-2xl mb-4 text-black">
          Transaction Table:
        </h1>
        <div className="h-[500px] overflow-y-scroll">
          <table className="table-auto w-full bg-[#F8FAF5]  ">
            <thead>
              <tr className="bg-gray-800 text-white sticky top-0">
                <th className="px-4 py-2 ">Search ID</th>
                <th className="px-4 py-2">Transaction ID</th>
                <th className="px-4 py-2">Customer ID</th>
                <th className="px-4 py-2">Transaction Type</th>
                <th className="px-4 py-2">Amount Transferred</th>
                <th className="px-4 py-2">Receiver ID</th>
                <th className="px-4 py-2">Fraud Flag</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((transaction) => (
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

      {/* For the graph */}
      <div className="py-10 flex flex-col justify-around">
        <h1 className="flex right-6 font-bold text-2xl">Data Visualization:</h1>
        <div className="flex flex-row justify-start">
          <div className="flex justify-around  pt-10 shadow-xl shadow-slate-950 rounded w-1/2">
            <PieChart transactions={transactions} />
          </div>
          <div className="flex justify-around  pt-10 shadow-xl shadow-slate-950 rounded relative left-8 w-1/2">
            <Linechart transactions={transactions} />
          </div>
        </div>
        <div className="flex flex-row justify-start mt-14">
          <div className="flex justify-around  pt-10 shadow-xl shadow-slate-950 rounded w-1/2">
            <ChartComponent transactions={transactions} />
          </div>
          <div className="flex justify-around  pt-10 shadow-xl shadow-slate-950 rounded relative left-8 w-1/2">
            <RadarChart transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

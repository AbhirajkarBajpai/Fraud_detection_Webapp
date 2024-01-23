import React from 'react';
import { Bar } from 'react-chartjs-2';

const NewGraph = ({ totalTransactions }) => {
  // Calculate the number of fraud and safe transactions
  const totalFraudTransactions = totalTransactions.filter(transaction => transaction.FraudFlag === 1).length;
  const totalSafeTransactions = totalTransactions.length - totalFraudTransactions;

  // Chart data
  const data = {
    labels: ['Total Transactions', 'Total Fraud Transactions'],
    datasets: [
      {
        label: 'Transactions',
        data: [totalTransactions.length, totalFraudTransactions],
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Total Transactions vs Total Fraud Transactions</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default NewGraph;

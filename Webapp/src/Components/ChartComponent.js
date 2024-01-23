import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Transaction Type Comparison',
    },
  },
};

const ChartComponent = ({ transactions }) => {
  // Group transactions by transaction type
  const transactionsByType = {};
  transactions.forEach((transaction) => {
    const { TransactionType, AmountTransferred } = transaction;
    if (!transactionsByType[TransactionType]) {
      transactionsByType[TransactionType] = [];
    }
    transactionsByType[TransactionType].push(AmountTransferred);
  });

  // Extract transaction types and corresponding datasets
  const labels = Object.keys(transactionsByType);
  const datasets = Object.entries(transactionsByType).map(([type, amounts], index) => ({
    label: `${type}`, // Adjust the label to include the dataset index
    data: amounts,
    borderColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`, // Random RGB color
    backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`, // Random RGBA color
  }));

  const data = {
    labels,
    datasets,
  };

  return <Line options={options} data={data} />;
};

export default ChartComponent;

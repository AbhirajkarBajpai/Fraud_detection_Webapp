import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);


  
    
   const  options={
      responsive: true,
      scales: {
        radialLinear: {
          display: false, // Set to false to hide values on each layer
        },
      },
      plugins: {
        title: {
          display: false,
          text: 'Chart.js Radar Chart'
        }
      }
    };
  
const RadarChart = ({ transactions }) => {
  // Group transactions by payment method
  const transactionsByPaymentMethod = {};
  transactions.forEach((transaction) => {
    const { TransactionType, AmountTransferred } = transaction;
    if (!transactionsByPaymentMethod[TransactionType]) {
      transactionsByPaymentMethod[TransactionType] = [];
    }
    transactionsByPaymentMethod[TransactionType].push(AmountTransferred);
  });

  // Calculate average amount for each payment method
  const averageAmounts = {};
  Object.entries(transactionsByPaymentMethod).forEach(([paymentMethod, amounts]) => {
    const totalAmount = amounts.reduce((sum, amount) => sum + amount, 0);
    averageAmounts[paymentMethod] = totalAmount / amounts.length;
  });

  const labels = Object.keys(averageAmounts);
  const dataValues = Object.values(averageAmounts);

  const radarChartData = {
    labels,
    datasets: [
      {
        label: 'Average Amount Transferred',
        data: dataValues,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Radar data={radarChartData} options={options} />;
};

export default RadarChart;
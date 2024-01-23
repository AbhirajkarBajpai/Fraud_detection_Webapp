import { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  indexAxis: 'x',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Bar garph for the transaction',
    },
  },
};

const HorizontalChart = ({ transactions }) => {
  const [data, setData] = useState({
    labels: [], 
    datasets: [
      {
        label: 'Transaction Data',
        data: [],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(99, 132, 0.5)',
      },
    ],
  });

  useEffect(() => {
    const aggregateData = () => {
      const aggregatedData = {};

      transactions.forEach((val) => {
        const { TransactionType, AmountTransferred } = val;

        // If the transaction type is not in the aggregatedData, initialize it
        if (!aggregatedData[TransactionType]) {
          aggregatedData[TransactionType] = 0;
        }

        // Add the AmountTransferred to the corresponding transaction type
        aggregatedData[TransactionType] += AmountTransferred;
      });

      // Extract labels and dataset from aggregatedData
      const labels = Object.keys(aggregatedData);
      const dataset = Object.values(aggregatedData);

      setData({
        labels: labels,
        datasets: [
          {
            label: 'Transaction Data',
            data: dataset,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(99, 132, 0.5)',
          },
        ],
      });
    };

    aggregateData();
  }, [transactions]);

  return (
    <div style={{ width: '100%', height: '50%' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default HorizontalChart;

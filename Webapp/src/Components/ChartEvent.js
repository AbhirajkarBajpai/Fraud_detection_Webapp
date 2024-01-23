import React, { MouseEvent, useRef } from 'react';
import { Chart as ChartJS, LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip } from 'chart.js';
import { Chart, getDatasetAtEvent, getElementAtEvent, getElementsAtEvent } from 'react-chartjs-2';

ChartJS.register(LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const getRandomData = () => labels.map(() => Math.floor(Math.random() * 100));

export  default function ChartEvent({ transactions }) {
  const printDatasetAtEvent = (dataset) => {
    if (!dataset.length) return;

    const datasetIndex = dataset[0].datasetIndex;

    console.log(data.datasets[datasetIndex].label);
  };

  const printElementAtEvent = (element) => {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];

    console.log(data.labels[index], data.datasets[datasetIndex].data[index]);
  };

  const printElementsAtEvent = (elements) => {
    if (!elements.length) return;

    console.log(elements.length);
  };

  const chartRef = useRef(null);

  const onClick = (event) => {
    const { current: chart } = chartRef;

    if (!chart) {
      return;
    }

    printDatasetAtEvent(getDatasetAtEvent(chart, event));
    printElementAtEvent(getElementAtEvent(chart, event));
    printElementsAtEvent(getElementsAtEvent(chart, event));
  };

  // Extract fraud and non-fraud data
  const fraudData = transactions.filter(transaction => transaction.FraudFlag === 1).length;
  const nonFraudData = transactions.filter(transaction => transaction.FraudFlag === 0).length;

  const data = {
    labels: ['Fraud', 'Non-Fraud'],
    datasets: [
      {
        type: 'bar',
        label: 'Fraud Transactions',
        backgroundColor: 'rgb(255, 99, 132)',
        data: [fraudData],
      },
      {
        type: 'bar',
        label: 'Non-Fraud Transactions',
        backgroundColor: 'rgb(75, 192, 192)',
        data: [nonFraudData],
      },
    ],
  };

  return (
    <Chart
      ref={chartRef}
      type='bar'
      onClick={onClick}
      options={options}
      data={data}
    />
  );
}
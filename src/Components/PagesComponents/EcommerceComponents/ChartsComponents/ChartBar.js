import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: 'Earnings',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Max',
      data: [10,20,30,40,50,70,50],
      backgroundColor: 'rgba(255, 99, 132)',
    },
    {
      label: 'Min',
      data: [5,20,15,10,30,59,26],
      backgroundColor: 'rgba(53, 162, 235)',
    },
  ],
};

const ChartBar = () => {
  return (
    <div style={{background: 'rgb(185 255 47)', padding: '10px', borderRadius: '10px'}}>
      <Bar options={options} data={data} />
    </div>
  );
}

export default ChartBar;
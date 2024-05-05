import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors,
  PointElement,
} from "chart.js";
import { color } from "chart.js/helpers";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        font: {
          size: 14,
        },
        borderColor: "#fff",
      },
    },
    title: {
      display: true,
      text: "Today's temperature",
      color: "#d4d4d4",
      font: {
        size: 30,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: true,
        color: "#404040",
      },
      ticks: {
        color: "#8c8c8c",
      },
    },
    y: {
      grid: {
        display: true,
        color: "#404040",
      },
      ticks: {
        color: "#8c8c8c",
      },
    },
  },
};

export const data = {
  labels: ["0:00", "3:00", "6:00", "9:00", "12:00", "15:00", "18:00", "21:00"],
  datasets: [
    {
      label: "Temperature °C",
      data: [45, 20, 26, -10, 6, 43, 32, 15],
      fill: false,
      backgroundColor: "#4a74ff01",
      Color: "#4a74ff",
      tension: 0.1,
      pointRadius: 3,
      pointBackgroundColor: "#4a74ff",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#4a74ff",
      borderColor: "#4a74ff8c",
      color: "#fff",
    },
  ],
};

const LineChart: React.FC = () => {
  return <Line options={options} data={data} />;
};

export default LineChart;

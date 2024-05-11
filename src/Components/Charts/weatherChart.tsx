import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  TooltipItem,
} from "chart.js";
import { useForecastContext } from "@/contexts/forecastCtx";

export interface AXD {
  dataset: {
    label: string;
  };
  parsed: {
    y: number;
  };
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const LineChart: React.FC = () => {
  const { forecastData } = useForecastContext();

  const [chartData, setChartData] = useState({
    labels: [""],
    datasets: [
      {
        label: "Temperature",
        data: [""],
        fill: false,
        backgroundColor: "#4a74ff01",
        borderColor: "#4a74ff8c",
        tension: 0.1,
        pointRadius: 3,
        pointBackgroundColor: "#4a74ff",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#3667e3",
      },
    ],
  });

  useEffect(() => {
    const setData = async () => {
      if (forecastData) {
        const newLabels: string[] = [];
        const newData: number[] = [];

        forecastData.list.forEach((item) => {
          if (forecastData.city.timezone === undefined) {
            return "";
          }

          const localTime = item.dt * 1000;
          const timeOffset = forecastData.city.timezone * 1000;
          const localDate = new Date(localTime + timeOffset);

          const formattedLocalSunrise = localDate.toLocaleTimeString("es-US", {
            hour: "numeric",
            minute: "2-digit",
            timeZone: "UTC",
          });

          newLabels.push(formattedLocalSunrise);
          newData.push(item.main.temp);
        });

        setChartData({
          labels: newLabels,
          datasets: [
            {
              ...chartData.datasets[0],
              data: newData.map((temp) => temp.toFixed(1)),
            },
          ],
        });
      }
    };

    setData();
  }, [forecastData]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 14,
          },
          color: "#ababab",
        },
      },
      title: {
        display: true,
        text: "Temperature forecast",
        color: "#d4d4d4",
        font: {
          size: 30,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: TooltipItem<"line">) {
            const label = tooltipItem.dataset.label || "";
            const value = tooltipItem.raw as number;
            return `${label}: ${value} °C`;
          },
        },
        backgroundColor: "#101010",
        bodyFont: {
          size: 14,
        },
        titleFont: {
          size: 16,
        },
        titleColor: "#d4d4d4",
        bodyColor: "#ababab",
        displayColors: true,
        borderWidth: 1,
        borderColor: "#00000000",
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "#3b3b3b",
        },
        ticks: {
          color: "#8c8c8c",
          font: {
            size: 11,
          },
        },
      },
      y: {
        grid: {
          display: true,
          color: "#3b3b3b",
        },
        ticks: {
          color: "#8c8c8c",
        },
      },
    },
  };

  return <Line options={options} data={chartData} />;
};

export default LineChart;

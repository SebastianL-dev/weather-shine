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
import ChartSkeleton from "../skeletons/chartSkeleton";

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
        backgroundColor: "#4a74ff00",
        borderColor: "#3b82f64c",
        tension: 0.1,
        pointRadius: 3,
        pointBackgroundColor: "#3b82f6",
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
          color: "#bfdbfe99",
        },
      },
      title: {
        display: true,
        text: "Temperature forecast",
        color: "#fff",
        font: {
          size: 30,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: TooltipItem<"line">) {
            const label = tooltipItem.dataset.label || "";
            const value = tooltipItem.raw as number;
            return ` ${label}: ${value} °C`;
          },
        },
        backgroundColor: "#0F224699",
        bodyFont: {
          size: 14,
        },
        titleFont: {
          size: 16,
        },
        titleColor: "#fff",
        bodyColor: "#617694",
        displayColors: false,
        borderWidth: 1,
        borderColor: "#19335E",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#bfdbfe8c",
          font: {
            size: 11,
          },
        },
      },
      y: {
        grid: {
          display: true,
          color: "#bfdbfe2f",
        },
        ticks: {
          color: "#bfdbfe8c",
        },
      },
    },
  };

  return (
    <>
      {forecastData == null ? (
        <ChartSkeleton />
      ) : (
        <Line options={options} data={chartData} />
      )}
    </>
  );
};

export default LineChart;

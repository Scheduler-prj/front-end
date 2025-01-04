import React from "react";
import { B5 } from "../../../../../styles/Typography";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  ChartOptions, // Chart.js에서 제공하는 옵션 타입 추가
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler);

const QuizChart = () => {
  const data = {
    labels: ["월", "화", "수", "목", "금", "토", "일"],
    datasets: [
      {
        label: "정답률",
        data: [40, 30, 50, 60, 80, 100, 70], // 원하는 데이터로 교체
        borderColor: "rgba(83, 135, 255, 1)",
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return;
          // 그라디언트 만들기
          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom); // 방향 변경
          gradient.addColorStop(0, "rgba(83, 135, 255, 0.4)"); // 위쪽 색에 투명도 추가
          gradient.addColorStop(1, "rgba(83, 135, 255, 0)"); // 아래쪽 색 (투명)
          return gradient;
        },
        tension: 0, // 선을 각지게 만들기 위해 tension을 0으로 설정
        fill: true,
        pointBackgroundColor: "rgba(83, 135, 255, 1)",
        pointBorderColor: "#fff",
        pointHoverRadius: 5,
      },
    ],
  };

  // ChartOptions 타입을 사용하여 options의 타입을 지정
  const options: ChartOptions<'line'> = {
    responsive: true,
    // maintainAspectRatio: false, // 비율을 유지하지 않도록 설정
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#9B9B9B",
          font: {
            size: 14,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        position: "right", // y축 수치를 오른쪽에 표시
        ticks: {
          color: "#9B9B9B",
          font: {
            size: 14,
          },
          stepSize: 50,
        },
        grid: {
          color: "rgba(217, 217, 217, 0.3)",
        },
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <div
      style={{
        // width: "500px",
        width:"50.57%",//임시
        // height: "300px",
        height: "188.797px", //임시
        padding: "16px",
        backgroundColor: "#F9F9F9",
        borderRadius: "16px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <B5 style={{color:'#4D4D55',marginBottom:'20px'}}>
        7일간의 퀴즈 정답률
      </B5>
      {/* <Line data={data} options={options} style={{height:'114px',display:'inline-block'}}/> */}
      {/* <Line data={data} options={options} style={{ height: "114px", width: "100%" }} height={114} /> */}
      <Line data={data} options={options} height={114} style={{ height: '114px' }} />
    </div>
  );
};

export default QuizChart;

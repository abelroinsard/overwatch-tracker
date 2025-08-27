import React from "react";
import "./PlayTimes.css";
import { BarChart } from "@mui/x-charts";

export type PlayTimesProps = {
  QPTime: number;
  CompTime: number;
};

export default function PlayTimes({ QPTime, CompTime }: PlayTimesProps) {
  return (
    <div className="PlayTimes">
      <h3>Play Times:</h3>
      <div className="chart">
        <BarChart
          series={[
            { data: [10, 20], label: "pv", id: "pvId" },
            { data: [30, 40], label: "uv", id: "uvId" },
          ]}
          xAxis={[{ data: ["a", "b"] }]}
          yAxis={[{ width: 50 }]}
        />
      </div>
    </div>
  );
}
